'use client';
import { useEffect, useSyncExternalStore } from 'react';
import { copy, languages, type Locale } from './i18n';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';
let current: Locale | undefined;
const eventName = 'mesa-language-change';
function read(): Locale { if(current) return current; try {const value=localStorage.getItem('mesa-language'); if(value==='es'||value==='pt'||value==='en')return value;} catch { /* Storage may be disabled. */ } return 'es'; }
function subscribe(callback:()=>void) { window.addEventListener(eventName,callback);window.addEventListener('storage',callback);return ()=>{window.removeEventListener(eventName,callback);window.removeEventListener('storage',callback);}; }
export function useLanguage() {
 const locale=useSyncExternalStore(subscribe,read,()=> 'es' as Locale);
 useEffect(()=>{document.documentElement.lang=copy[locale].lang;document.title=copy[locale].title;},[locale]);
 return {locale,t:copy[locale]};
}
export function LanguagePicker({locale}:{locale:Locale}) {
 return <Select value={locale} items={languages} onValueChange={value=>{if(value!=='es'&&value!=='pt'&&value!=='en')return;current=value;try{localStorage.setItem('mesa-language',value);}catch{/* Keep selection for this visit. */}window.dispatchEvent(new Event(eventName));}}><SelectTrigger className="language-picker" aria-label={copy[locale].language}><Globe size={17}/><SelectValue/></SelectTrigger><SelectContent className="language-options" align="end">{languages.map(l=><SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>)}</SelectContent></Select>;
}
