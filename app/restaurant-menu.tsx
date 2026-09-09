'use client';
/* oxlint-disable next/no-img-element -- Local menu assets use fixed dimensions and lazy loading on both static and Sites builds. */
import { ArrowUpRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { menuCategories } from './menu-data';
import { copy, menuLabel, type Locale } from './i18n';
import { dishDescription } from './menu-translations';
const price = (value: number) => '$' + new Intl.NumberFormat('es-CL').format(value);
export default function RestaurantMenu({locale}: {locale:Locale}) {
const t=copy[locale];
return <section className="restaurant-menu" id="cardapio" aria-labelledby="menu-heading"><div className="menu-heading-row"><div><p className="eyebrow muted">{t.choose}</p><h2 id="menu-heading">{t.menuTitle[0]}<br/><span>{t.menuTitle[1]}</span></h2></div><div className="menu-heading-note"><p>{t.toast}</p><span>{t.currency}</span><a href="https://drive.google.com/file/d/1lS13PyfqNc4YmnU80ek9CKsBl0sNp5RG/view" target="_blank" rel="noreferrer">{t.original} <ArrowUpRight size={16}/></a></div></div>
<Tabs defaultValue="burgers" className="food-tabs"><TabsList className="category-tabs" aria-label={t.categories}>{menuCategories.map(c=><TabsTrigger key={c.id} value={c.id} className="category-tab">{menuLabel(c.label,locale)}</TabsTrigger>)}</TabsList>{menuCategories.map(c=><TabsContent key={c.id} value={c.id} className="category-panel">{c.groups.map((group,gi)=><div className="menu-group" key={group.title}><div className="group-title"><span>{String(gi+1).padStart(2,'0')}</span><h3>{menuLabel(group.title,locale)}</h3><span>{group.items.length} {t.options}</span></div><div className={c.id==='burgers'&&gi===0?'burger-grid':'dishes-grid'}>{group.items.map(dish=><article key={dish.name} className={dish.image?'burger-card':'dish-row'}>{dish.image&&<div className="burger-photo"><img src={`/images/menu-${dish.image}.png`} alt={dish.name} loading="lazy" width={260} height={220}/>{dish.name==='Vegana'&&<span className="food-tag">{t.vegan}</span>}</div>}<div className="dish-info"><div className="dish-name"><h4>{menuLabel(dish.name,locale)}</h4><span>{price(dish.price)}</span></div>{dish.description&&<p>{dishDescription(dish,locale)}</p>}</div></article>)}</div></div>)}{c.id==='drinks'&&<p className="menu-promo">{t.promo}</p>}</TabsContent>)}</Tabs><div className="menu-end"><p>{t.notice[0]}<br/>{t.notice[1]}</p><a className="button primary" href="https://www.rappi.cl/santiago-de-chile/restaurantes/delivery/68328-la-mesa-redonda" target="_blank" rel="noreferrer">{t.rappiButton} <ArrowUpRight size={20}/></a></div></section>;
}


