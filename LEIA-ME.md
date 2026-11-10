# Site Naiko Pets

Landing page estática (HTML + CSS + JS puro) que leva o visitante a agendar pelo WhatsApp.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Página (estrutura + textos + CSS crítico da primeira tela + ícones SVG) |
| `style.css` | Estilos das demais seções |
| `script.js` | Ano do rodapé e animação de entrada das seções |
| `assets/img` | Fotos em AVIF/WebP em dois tamanhos (360 e 514 px), logo, imagem de compartilhamento (OG) e ícones |
| `assets/fonts` | Fontes Baloo 2 e Nunito (WOFF2, auto-hospedadas) |
| `_headers` | Regras de cache para o Cloudflare Pages |
| `robots.txt`, `sitemap.xml`, `favicon.ico`, `apple-touch-icon.png`, `site.webmanifest` | SEO e ícones |

## Como editar

- **Textos**: direto no `index.html`.
- **WhatsApp**: o número `5511962841447` aparece em vários links `wa.me` do `index.html` e no `telephone` dos dados estruturados. Use "Localizar e substituir" para trocar todos.
- **Trocar fotos**: gere `nome-360.webp/.avif` e `nome-514.webp/.avif` em `assets/img` e troque o nome no `<picture>` correspondente.
- **Mudou o CSS ou o JS?** Aumente o `?v=1` no `index.html` (ex.: `?v=2`) para o navegador baixar a versão nova.

## Publicar grátis no Cloudflare Pages

Cloudflare → Workers & Pages → Create → Pages → **Upload assets** → arraste esta pasta → Deploy.
Passo a passo: https://developers.cloudflare.com/pages/get-started/direct-upload/

✏️ **CONFIRMAR**: o site usa o endereço `https://naiko-pets.pages.dev/`. Se o endereço final for outro,
troque-o no `index.html` (canonical, og:url, og:image, twitter:image e dados estruturados), no `sitemap.xml` e no `robots.txt`.
