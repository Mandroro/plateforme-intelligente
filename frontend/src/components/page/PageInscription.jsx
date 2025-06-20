import { Cog, LockKeyhole, Mail, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useApiConfig } from "../../ApiUrlConfiguration";
import axios from "axios";

export default function PageInscription() {
  const redirection = useNavigate();
  const { ApiURL } = useApiConfig();
  const [role, setRole] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const retourPageAccueil = () => {
    redirection("/");
  };
  
  const creerCompte = (e) => {
    e.preventDefault();

    const data = {
      role: role,
      name: nom,
      email: email,
      password: password
    }

    axios.post(`${ApiURL}/inscription`, data, {
      headers:{
        "Content-Type":"application/json"
      }
    }).then((response) => {
      if(response.status === 201){
        
        console.log("Resultat: ", response.data);
        
        setRole("");
        setNom("");
        setEmail("")
        setPassword("");
      }
    }).catch((error) => {
      console.log("Erreur inattendue: ", error);
    })

    console.log("Data inscription: ", data);
  };

  return (
    <div className="py-10 md:py-18">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-6 space-x-0">
          <div className="col-start-3 md:col-start-2 col-end-5 md:col-end-6 text-center p-4">
            <div className="text-center py-4 mb-8">
              <h1 className="text-white font-[Sora] font-bold text-[35px]">
                Job<span className="text-green-600">Remote</span>
              </h1>
              <p className="text-gray-300 font-[Sora] font-light text-[14px]">
                Créez un compte en tant que Freelancer ou Recruteur.
              </p>
            </div>
            <div className="space-y-2 mb-4">
            <div className="relative flex items-center w-full mr-2">
                <Cog className="absolute left-4 text-gray-500" />
                <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full bg-gray-200  border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none">
                  <option className="text-gray-500">Type de compte</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Recruteur">Recruteur</option>
                </select>
              </div>
              <div className="relative flex items-center w-full mr-2">
                <User className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-gray-200 border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un nom/prénom"
                  value={nom}
                  onChange={(e)=>setNom(e.target.value)}
                />
              </div>
              <div className="relative flex items-center w-full mr-2">
                <Mail className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-gray-200 border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un adresse email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="relative flex items-center w-full mr-2">
                <LockKeyhole className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-gray-200 border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un mot de passe"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="space-x-1">
              <button
                onClick={creerCompte}
                className="bg-blue-600 text-white font-[Sora] font-light text-[14px] w-full p-2 rounded-md mb-2 cursor-pointer"
              >
                Créer mon compte
              </button>
              <button
                onClick={retourPageAccueil}
                className="text-white hover:bg-gray-300 hover:text-gray-900 font-[Sora] font-light text-[14px] w-full p-2 rounded-md mb-2 cursor-pointer flex items-center justify-center"
              >
                Retour vers la page d'accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
