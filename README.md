# Landing Page - Curso Online

Página de vendas profissional para curso online com design moderno, responsivo e otimizado para conversão (CRO).

## 📁 Estrutura de Arquivos

```
├── index.html    # Página principal (HTML5 semântico)
├── style.css     # Todos os estilos (variáveis, layout, responsivo)
├── app.js        # JavaScript (menu mobile, animações scroll)
├── img/
│   └── img.jpeg  # Foto do instrutor
└── README.md     # Guia de customização (este arquivo)
```

## 🎨 Personalização

### 1. Substituir a foto do instrutor

1. Coloque sua foto no diretório `img/` (formatos recomendados: **JPG** ou **WebP**)
2. No arquivo `index.html`, localize a tag `<img>` dentro da seção **HERO** (linha ~52)
3. Atualize o atributo `src` e `alt`:

```html
<img src="img/sua-foto.jpg" alt="Seu Nome – Instrutor de ...">
```

> 💡 Dica: Use uma foto profissional com fundo neutro. Dimensão recomendada: **500×500px** (quadrada).

### 2. Alterar textos

Todas as seções estão comentadas no `index.html`:

| Seção | Localização | O que editar |
|-------|-------------|-------------|
| **Header** | Linhas 31–43 | Logo (`MKT<span>PRO</span>`), links do menu |
| **Hero** | Linhas 48–60 | Título, subtítulo, botão CTA, texto de confiança |
| **Sobre** | Linhas 63–80 | Nome, bio, badges de credenciais |
| **Benefícios** | Linhas 83–115 | Título dos cards, ícones, descrições |
| **CTA** | Linhas 118–126 | Headline, texto, botão, texto de urgência |
| **Footer** | Linhas 131–162 | Logo, descrição, links, redes sociais, contato |

### 3. Alterar cores

No arquivo `style.css`, localize o bloco `:root` (linha 2) e modifique as variáveis:

```css
:root {
  --red-vibrant: #FF1744;  /* Cor principal (CTAs, destaques) */
  --red-dark: #C41C3B;     /* Gradientes, backgrounds secundários */
  --black: #1A1A1A;        /* Textos principais, headers */
  --white: #FFFFFF;        /* Backgrounds limpos */
  --gray: #F5F5F5;         /* Seções alternadas */
}
```

### 4. Alterar fontes

No `index.html`, troque as fontes na tag `<link>` do Google Fonts (linha 18) e atualize as variáveis no `style.css`:

```css
--font-heading: 'Poppins', sans-serif;
--font-body: 'Roboto', sans-serif;
```

### 5. SEO e Meta Tags

No `<head>` do `index.html` (linhas 5–16), atualize:

- `description` – descrição para busca
- `og:title` / `og:description` – compartilhamento em redes sociais
- `og:image` – imagem de preview (mín. 1200×630px)
- `canonical` – URL final do site

## 🚀 Implantação

Este é um site **estático** (HTML + CSS + JS). Você pode hospedar em:

- **Vercel** (`vercel deploy`)
- **Netlify** (arraste a pasta)
- **GitHub Pages**
- **Qualquer servidor HTTP** (Apache, Nginx, etc.)

## ✅ Checklist de Lançamento

- [ ] Foto do instrutor substituída e otimizada
- [ ] Textos personalizados (nome, bio, benefícios)
- [ ] Meta tags SEO preenchidas
- [ ] Links do footer e redes sociais atualizados
- [ ] Testar em mobile (Chrome DevTools)
- [ ] Testar contraste de cores (WCAG AA)
- [ ] Verificar navegação por teclado (Tab)

## 📄 Licença

Uso livre para projetos comerciais e pessoais.
