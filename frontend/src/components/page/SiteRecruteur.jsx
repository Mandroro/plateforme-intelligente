import React from 'react'
import Header from '../contenue-site-recruteur/layout/Header'
import Footer from '../contenue-site-recruteur/layout/Footer'
import Hero from '../contenue-site-recruteur/content/Hero'
import Tarif from '../contenue-site-recruteur/content/Tarif'
import Service from '../contenue-site-recruteur/content/Service'

export default function SiteRecruteur() {
  return (
    <>
        <Header/>
        <Hero/>
        <Service/>
        <Tarif/>
        <Footer/>
    </>
  )
}
