import Nosotros from '@/components/Nosotros';
import Explore from '@/components/Planes';
import Hero from '@/components/Hero';
import Nav from '@/components/Navbar';
import Contacto from '@/components/Contacto';
import Preguntas from '@/components/Preguntas';
import AnimatedBG from '@/components/AnimatedBG';
import Footer from '@/components/Footer';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Home() {
  return (
    <section className="overflow-hidden">
    
      <Nav />
      <Hero />
      <Nosotros />
      <Explore />
      <Preguntas />
      <Contacto />
      <AnimatedBG />
      <Footer />
      <WhatsAppIcon />
    </section>
  );
}
