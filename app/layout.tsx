import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'La Mesa Redonda | Hamburgueria em Santiago', description: 'Seu próximo encontro tem endereço. Explore o cardápio, peça pelo Rappi ou visite La Mesa Redonda em Sazié 2170, Santiago.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }
