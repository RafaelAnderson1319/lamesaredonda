# La Mesa Redonda

Site responsivo da hamburgueria La Mesa Redonda, com cardápio completo e imagens extraídas do cardápio original.

## Vercel / desenvolvimento estático

- `npm ci`
- `npm run dev:vercel`
- `npm run build:vercel`

A Vercel utiliza `vercel.json` e publica `dist-vercel`. O projeto não requer variáveis de ambiente.

## Sites

Os comandos originais `npm run dev` e `npm run build` preservam a compatibilidade com Sites/Vinext.

## Conteúdo

Produtos e preços: `app/menu-data.ts`. Interface do cardápio: `app/restaurant-menu.tsx`. Página: `app/page.tsx`. Estilos: `app/globals.css`.

Os pedidos são realizados no Rappi. Dados e valores foram transcritos do cardápio fornecido; disponibilidade deve ser confirmada no restaurante.
