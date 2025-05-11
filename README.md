# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Receive an error message when the `form` is submitted if:
    -   Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
    -   The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

Preview

Desktop

![desktop](./screenshots/desktop_preview.png)

Mobile

![mobile](./screenshots/mobile_preview.png)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   Javascript
-   Mobile-first workflow
-   [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework

### What I learned

I improved my knowledge in Tailwindcss. I used Tailwind transpilation to generate a file in /dist output.css.

Eu criei uma pequena função que valida um e-mail de entrada

```json
"scripts": {
		"dev": "npx @tailwindcss/cli -i ./style.css -o ./dist/output.css --watch"
	}
```

```html
<div class="font-[Poppins] flex max-md:flex-col min-md:flex-row min-md:w-full min-md:h-[100vh] min-md:justify-center"></div>
```

```js
function validarEmail(email) {
	const expressaoRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return expressaoRegular.test(email);
}
```

### Continued development

Deepen my studies in Tailwind and apply this knowledge in projects.

### Useful resources

-   [Alura](https://www.alura.com.br/artigos/tailwind-criando-componentes-com-apply?srsltid=AfmBOopiYwNi9ieA_MwsEGQH9FRbSkDYCVe88vI7T56qovtnEInLkGVp) - Dúvidas sobre @apply em tailwind

## Author

-   Github - [CJunior](https://github.com/Clar-Junior)
-   Frontend Mentor - [@Clar-Junior](https://www.frontendmentor.io/profile/Clar-Junior)
