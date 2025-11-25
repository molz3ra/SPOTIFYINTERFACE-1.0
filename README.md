````markdown
# 🎧 Spotify Landing Page Clone

Uma recriação responsiva e interativa da landing page do Spotify, desenvolvida com foco em **UI/UX**, animações modernas e manipulação de DOM.

![Project Preview](https://via.placeholder.com/800x400?text=Preview+do+Projeto)
## 📋 Sobre o Projeto

Este projeto consiste em uma Landing Page "pixel-perfect" inspirada na identidade visual do Spotify. O objetivo foi replicar a experiência imersiva da marca utilizando tecnologias web nativas, sem dependência de frameworks pesados.

A página apresenta um design Dark Mode elegante, tipografia consistente e micro-interações que enriquecem a navegação do usuário.

## ✨ Funcionalidades

### 🎨 Interface e Design
- **Layout Responsivo:** Adaptação fluida para Desktop, Tablet e Mobile.
- **Identidade Visual:** Uso fiel da paleta de cores (Green #1DB954 e Dark Mode) e gradientes.
- **Efeitos de Hover:** Transições suaves em botões e cards de planos.
- **Ripple Effect:** Efeito de "onda" ao clicar nos botões (implementado via JS).

### ⚙️ Interatividade (JavaScript)
- **Hero Dinâmico:**
  - Efeito de digitação (Typewriter) no título principal.
  - Card "Agora Tocando" flutuante com animação CSS.
  - **Simulador de Música:** O widget troca o nome da música e artista aleatoriamente a cada 5 segundos.
- **Scroll Inteligente:**
  - Navbar muda de aparência ao rolar a página.
  - Links de navegação com "Smooth Scroll".
  - Menu ativo (highlight) baseado na seção visível da tela.
- **Animações de Entrada:** Elementos surgem (fade-in/slide-up) conforme o usuário rola a página (Intersection Observer).

## 🛠️ Tecnologias Utilizadas

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) **HTML5 Semântico**
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) **CSS3** (Grid, Flexbox, Keyframes, CSS Variables)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) **JavaScript (Vanilla)**
* **FontAwesome** (Ícones)

## 📂 Estrutura de Arquivos

```text
/
├── index.html      # Estrutura semântica e conteúdo
├── styles.css      # Estilização global, variáveis e media queries
└── script.js       # Lógica de animações, observer e interações
````

## 🚀 Como Executar

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/molz3ra/SPOTIFYINTERFACE-1.0.git](https://github.com/molz3ra/SPOTIFYINTERFACE-1.0.git)
    ```
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em seu navegador de preferência.

> **Dica:** Para uma melhor experiência de desenvolvimento, utilize a extensão "Live Server" do VS Code.

## 🔍 Detalhes de Implementação

### Intersection Observer

O projeto utiliza a API `IntersectionObserver` para gatilhar animações apenas quando os elementos entram na viewport, garantindo performance e uma experiência visual agradável.

```javascript
// Exemplo do código utilizado
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
```

### Player Simulado

O card flutuante no Hero Section possui um array de objetos com músicas famosas que são alternadas automaticamente:

```javascript
const songs = [
    { title: 'Imagine', artist: 'John Lennon' },
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
    // ...
];
```

## 📄 Licença

Este projeto é para fins de estudo e portfólio. As marcas e logotipos do Spotify são propriedade de Spotify AB.

-----

Feito com 💚 por [molz3ra](https://www.google.com/search?q=https://github.com/molz3ra)

```
