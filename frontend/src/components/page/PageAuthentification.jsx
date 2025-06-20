import { AtSign, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useApiConfig } from "../../ApiUrlConfiguration";
import axios from "axios";

export default function PageAuthentification() {
  
  const redirection = useNavigate();
  const { ApiURL } = useApiConfig();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const retourPageAccueil = () => {
    redirection("/");
  };

  const seConnecter = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    axios.post(`${ApiURL}/connexion`, data, {
      headers: {
        "Content-Type":"application/json"
      }
    }).then((response) => {
      if(response.status === 200){
        
        localStorage.setItem("token", response.data.access_token);
        
        if(response.data.user['role'] === 'Freelancer'){
          console.log("Message: ", response.data.message);
          redirection("/pannel-freelancer");
        }
        else{
          console.log("Message: ", response.data.message);
          redirection("/pannel-recruteur");
        }
      }
    }).catch((error) => {
      console.log("Erreur inattendue: ", error);
    })
  };

  return (
    <div className="p-2 md:p-8">
      <div className="container mx-auto">
        <div className="grid grid-col-1 md:grid-cols-6 space-x-0">
          <div className=" col-start-3 md:col-start-2 col-end-5 md:col-end-6 p-8 rounded-md">
            <div className="text-center py-8 mb-8">
              <h1 className="text-white font-[Sora] font-bold text-[40px]">
                Job<span className="text-green-600">Remote</span>
              </h1>
              <p className="text-white font-[Sora] font-light text-[13px]">
                Veuillez remplir tous les informations
              </p>
            </div>
            <div className="space-y-2 mb-8">
              <div className="relative flex items-center w-full mr-2">
                <AtSign className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-gray-200 border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative flex items-center w-full mr-2">
                <LockKeyhole className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-gray-200 border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <NavLink
                className={
                  "text-white font-[Sora] text-[13px] hover:text-blue-600"
                }
              >
                Mot de passe oublié ?
              </NavLink>
            </div>
            <button
              onClick={seConnecter}
              className="bg-blue-600 text-white font-[Sora] font-light text-[14px] w-full p-2 rounded-md mb-2 cursor-pointer"
            >
              Se connecter
            </button>
            <button
              onClick={retourPageAccueil}
              className="text-white hover:text-gray-900 p-2 font-[Sora] text-[14px] w-full hover:bg-gray-300 rounded-md cursor-pointer"
            >
              Retour vers la page d'accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
