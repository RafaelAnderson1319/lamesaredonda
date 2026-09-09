'use client';
import RestaurantMenu from './restaurant-menu';
import { LanguagePicker, useLanguage } from './language';
import { ArrowUpRight, ArrowDown, MapPin, Phone, Clock, Utensils, CircleArrowRight } from 'lucide-react';
const delivery = 'https://www.rappi.cl/santiago-de-chile/restaurantes/delivery/68328-la-mesa-redonda';
const maps = 'https://www.google.com/maps/dir/?api=1&destination=La+Mesa+Redonda+Sazi%C3%A9+2170+Santiago+Chile';
export default function Home() {
 const {locale,t}=useLanguage();
 return <main id="inicio"><a className="skip-link" href="#cardapio">{t.skip}</a>
  <header className="navigation"><a className="brand" href="#inicio" aria-label={`La Mesa Redonda — ${t.home}`}><span className="brand-mark">M<span>R</span></span><span>LA MESA<br/>REDONDA</span></a><nav aria-label={t.nav}><a href="#menu-heading">{t.menu}</a><a href="#visite">{t.where}</a></nav><div className="nav-tools"><LanguagePicker locale={locale}/><a className="nav-order" href={delivery} target="_blank" rel="noreferrer">{t.order} <ArrowUpRight size={17}/></a></div></header>
  <section className="hero" aria-labelledby="hero-title"><div className="hero-image"/><div className="hero-shade"/><div className="hero-content"><p className="eyebrow"><span/> {t.eyebrow}</p><h1 id="hero-title">{t.hero[0]}<br/>{t.hero[1]}<br/><em>{t.hero[2]}</em></h1><p className="intro">{t.intro[0]}<br/>{t.intro[1]}</p><div className="hero-actions"><a className="button primary" href={delivery} target="_blank" rel="noreferrer">{t.myOrder} <ArrowUpRight size={20}/></a><a className="text-link" href="#menu-heading">{t.explore} <ArrowUpRight size={18}/></a></div></div><div className="hero-bottom"><a href="#menu-heading" className="scroll-link"><ArrowDown size={18}/> {t.experience}</a><span>SAZIÉ 2170 — SANTIAGO</span></div><span className="image-note">{t.illustration}</span></section>
  <div className="ticker" aria-hidden="true"><span>LA MESA REDONDA</span><span>✳</span><span>{t.ticker}</span><span>✳</span><span>SANTIAGO, CHILE</span><span>✳</span></div>
  <RestaurantMenu locale={locale}/>
  <section id="visite" className="visit-section"><div className="visit-title"><p className="eyebrow muted">{t.visit}</p><h2>{t.seat[0]}<br/>{t.seat[1]}</h2><a href={maps} target="_blank" rel="noreferrer" className="route-link">{t.route} <CircleArrowRight size={30}/></a></div><div className="visit-details"><div className="detail"><MapPin/><div><p>{t.come}</p><h3>Sazié 2170</h3><span>7560022 Santiago, Región Metropolitana, Chile</span><small>Plus Code: G8XM+MM Santiago, Chile</small></div></div><div className="detail"><Clock/><div><p>{t.opening}</p><h3>12:00</h3><span>{t.hours}</span></div></div><div className="detail"><Phone/><div><p>{t.contact}</p><a className="phone" href="tel:+56926312158">+56 9 2631 2158 <ArrowUpRight size={19}/></a></div></div></div></section>
  <footer><a className="brand" href="#inicio"><Utensils size={23}/><span>LA MESA REDONDA</span></a><span>{t.footer}</span><a href={delivery} target="_blank" rel="noreferrer">{t.rappi} <ArrowUpRight size={16}/></a></footer>
 </main>;
}
