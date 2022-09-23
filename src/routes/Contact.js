import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 naslov="KONTAKT" text="Kontaktirajte me preko obrasca ili na telefon!" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact