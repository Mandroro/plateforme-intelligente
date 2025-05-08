import React from 'react'
import Header from '../content/site-vitrine/layout/Header';
import Footer from '../content/site-vitrine/layout/Footer';
import Accueil from '../content/site-vitrine/Accueil';
import { Outlet } from 'react-router';
export default function SiteVitrine() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
