import RestaurantMenu from './restaurant-menu';
import { ArrowUpRight, ArrowDown, MapPin, Phone, Clock, Utensils, CircleArrowRight } from 'lucide-react';
const delivery = 'https://www.rappi.cl/santiago-de-chile/restaurantes/delivery/68328-la-mesa-redonda';
const maps = 'https://www.google.com/maps/dir/?api=1&destination=La+Mesa+Redonda+Sazi%C3%A9+2170+Santiago+Chile';
export default function Home() {
 return <main id="inicio">
  <header className="navigation"><a className="brand" href="#inicio" aria-label="La Mesa Redonda início"><span className="brand-mark">M<span>R</span></span><span>LA MESA<br/>REDONDA</span></a><nav aria-label="Navegação principal"><a href="#menu-heading">Cardápio</a><a href="#visite">Onde estamos</a></nav><a className="nav-order" href={delivery} target="_blank" rel="noreferrer">Pedir on-line <ArrowUpRight size={17}/></a></header>
  <section className="hero" aria-labelledby="hero-title"><div className="hero-image"/><div className="hero-shade"/><div className="hero-content"><p className="eyebrow"><span/> HAMBURGUERIA · SANTIAGO, CHILE</p><h1 id="hero-title">BONS MOMENTOS.<br/>UMA MESA.<br/><em>MUITO SABOR.</em></h1><p className="intro">O próximo encontro tem endereço.<br/>Sente-se à mesa. O resto é sabor.</p><div className="hero-actions"><a className="button primary" href={delivery} target="_blank" rel="noreferrer">FAZER MEU PEDIDO <ArrowUpRight size={20}/></a><a className="text-link" href="#menu-heading">Explorar cardápio <ArrowUpRight size={18}/></a></div></div><div className="hero-bottom"><a href="#menu-heading" className="scroll-link"><ArrowDown size={18}/> A EXPERIÊNCIA COMEÇA AQUI</a><span>SAZIÉ 2170 — SANTIAGO</span></div><span className="image-note">Imagem ilustrativa</span></section>
  <div className="ticker" aria-hidden="true"><span>LA MESA REDONDA</span><span>✳</span><span>O SABOR DO ENCONTRO</span><span>✳</span><span>SANTIAGO, CHILE</span><span>✳</span></div>
  <RestaurantMenu/>
  <section id="visite" className="visit-section"><div className="visit-title"><p className="eyebrow muted">02 / NOS ENCONTRAMOS AQUI</p><h2>SEU LUGAR<br/>À MESA.</h2><a href={maps} target="_blank" rel="noreferrer" className="route-link">Traçar minha rota <CircleArrowRight size={30}/></a></div><div className="visit-details"><div className="detail"><MapPin/><div><p>VENHA NOS VISITAR</p><h3>Sazié 2170</h3><span>7560022 Santiago, Región Metropolitana, Chile</span><small>Plus Code: G8XM+MM Santiago, Chile</small></div></div><div className="detail"><Clock/><div><p>ABERTURA INFORMADA</p><h3>12:00</h3><span>Consulte os dias e horários por telefone.</span></div></div><div className="detail"><Phone/><div><p>FALE COM A MESA</p><a className="phone" href="tel:+56926312158">+56 9 2631 2158 <ArrowUpRight size={19}/></a></div></div></div></section>
  <footer><a className="brand" href="#inicio"><Utensils size={23}/><span>LA MESA REDONDA</span></a><span>Hambúrgueres. Encontros. Santiago.</span><a href={delivery} target="_blank" rel="noreferrer">Peça pelo Rappi <ArrowUpRight size={16}/></a></footer>
 </main>;
}


