import React from "react";
import Profil1 from "./../../images/exemple-logo-societe/archetype-consulting.jpeg";
import { PenBox } from "lucide-react";
import InformationProfil from "./modal/InformationProfil";
import { useState } from "react";

export default function CompteRecruteur() {
  const [open, setOpen] = useState(false);
  const ouvrirInformationProfil = () => {
    setOpen(true);
  }

  const fermerInformationProfil = () => {
    setOpen(false);
  }
  return (
    <>
      <div className="bg-gray-800 p-18 md:p-20 relative mb-18 md:mb-14">
        <div className="absolute top-14 left-8">
          <img className="rounded-md w-60" src={Profil1} />
        </div>
      </div>
      <div className="p-8 space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-[Sora] text-[20px]">
            Information sur mon profil
          </h1>
          <button onClick={ouvrirInformationProfil} className="p-2 text-white hover:text-gray-500 rounded-md cursor-pointer">
            <PenBox />
          </button>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-start-1 col-end-7 md:col-end-4 bg-gray-800 rounded-md p-3">
            <label className="text-white font-[Sora]">Nom de l'entreprise</label>
            <input
              className=" w-full border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
              value="Archetype Consulting"
              readOnly
            />
          </div>
          <div className="col-start-1 md:col-start-4 col-end-7 bg-gray-800 rounded-md p-3">
            <label className="text-white font-[Sora]">Secteur d'activité</label>
            <input
              className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
              value="Entreprise de service informatique"
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-start-1 col-end-7 md:col-end-4 bg-gray-800 rounded-md p-3">
            <label className="text-white font-[Sora]">URL du site web</label>
            <input
              className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
              value="https://example.example"
              readOnly
            />
          </div>
          <div className="col-start-1 md:col-start-4 col-end-7 bg-gray-800 rounded-md p-3">
            <label className="text-white font-[Sora]">Adresse</label>
            <input
              className="w-full border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
              value="Antananarivo, Madagascar"
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-10">
          <div className="col-start-1 col-end-7 md:col-end-4 bg-gray-800 rounded-md p-3">
            <label className="text-white font-[Sora]">Contact</label>
            <input
              className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
              value="0348574101"
              readOnly
            />
          </div>
          <div className="col-start-1 md:col-start-4 col-end-7 bg-gray-800 rounded-md p-3">
            <label className="text-white font-[Sora]">Email</label>
            <input
              className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
              value="example@example.com"
              readOnly
            />
          </div>
        </div>

        <h1 className="text-white font-[Sora] text-[20px]">
          Gérer le mot de passe de mon compte
        </h1>
        <div className="grid grid-cols-6 gap-2 mb-4">
          <div className="col-start-1 col-end-7 md:col-end-4 bg-gray-800 rounded-md p-4">
            <label className="text-white font-[Sora]">
              Nouveau mot de passe
            </label>
            <input
              className=" w-full border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
              placeholder="Saisir un nouveau mot de passe "
            />
          </div>
          <div className="col-start-1 md:col-start-4 col-end-7 bg-gray-800 rounded-md p-4">
            <label className="text-white font-[Sora]">
              Confirmation du mot de passe
            </label>
            <input
              className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
              placeholder="Confirmer votre mot de passe"
            />
          </div>
        </div>
        <div className="md:text-end">
          <button className="bg-green-600 hover:bg-green-700 text-white font-[Sora] text-[14px] p-3 rounded-md cursor-pointer w-full md:w-1/4">
            Mettre à jour le mot de passe
          </button>
        </div>
      </div>

      {/* Formulaire information profil */}
      <InformationProfil open={open} setOpen={setOpen} fermerInformationProfil={fermerInformationProfil}/>
    </>
  );
}
