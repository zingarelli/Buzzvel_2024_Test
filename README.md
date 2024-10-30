# Buzzvel 2024 | Dev Team Test

This project is part of the hiring process as a Front End Developer for [Buzzvel](https://buzzvel.com/).

It is developed in React (18.3.11), using Vite (5.4.9).

In order to run the project, after downloading it, use the following commands:

```cmd
npm i
npm run dev
```

The application can be acessed in `http://localhost:5173/`.

> **Note:** if you wish to test it locally on a phone, run `npm run dev -- --host` instead and access the application on your phone using `http://<your_local_ip_address>:5173`.

## About the test

This short test consists in converting the Figma designs provided by Buzzvel into a fully functional web/mobile page for a company called "Soller", focusing on a fully responsive design, including animations, and
performance optimization. Since this is a React project, component reusability is also a must.

## About the development

The project was created using Vite and developed in React. For styling, I used CSS Modules and a mobile-first approach.

### Styling

Here are some decisions I made regarding styles abstracted from the Figma file. I created CSS variables for most of them.

- Breakpoint: the desktop layout is being applied to screens with a minimum width of 1440px. There's no layout in the Figma file for tablet screens, so I'm using the mobile layout in this case. It would be nice though to have an intermediary breakpoint for tablet screens, for a better positioning of the elements. This would be something I'd check with the team in a real case scenario.

    - The only exception is in the header and Hero section (first section), in which I created an intermediary layout (`min-width: 1024px`), as this was the only part of the layout in which elements needed more space to fit properly. 

- Font: 

    - Roboto;
    - Weight: 400, 500, 700, 800;
    - Size: 14, 16, 18, 20, 24, 32, 40, 56, 72;
    - Obtained from [Google Fonts](https://fonts.google.com/specimen/Roboto).

- Colors: 

    - white: #FFFFFF;
    - black-primary: #0F172A;
    - black-secondary: #475569;
    - blue-primary: #0369A1;
    - orange-primary: #D97706;
    - orange-secondary: #FCD34D;
    - orange-tertiary: #78350F;
    - orange-quaternary: #F59E0B;
    - purple-primary: #581C87;
    - purple-secondary: #7E22CE;
    - purple-tertiary: #A252EE;
    - purple-quaternary: #A855F7;

- Image placeholder (for info and testimonial cards):

    - https://placehold.co/64/white/white/png

### Hidden button in mobile layout

The mobile layout in the Figma file has a hidden button on the header, behind the picture of a worker installing solar panels. I decided it was interesting to have it in the final version, so I've added it to the application. In a real case scenario, this would be something I'd discuss with the team in order to check if it was a leftover from previous design that shouldn't be implemented.

### Duplicate section in mobile layout

Also in the mobile layout, the "Personalized services" section is duplicated. I believe it was some copy/paste mistake, since in the desktop layout there's a section called "Powerful features" which is not present in the mobile layout. So I've added the text content from this section to the last duplicate of "Personalized services".

### Mock content

In order to simulate a real case scenario in which we would obtain data for the testimonials from an API, I created a `/mock` folder in which I added the profile pictures (`/mock/assets`) and a `testimonials.js` file with the content for each testimonial as an array of objects. This way I was able to simulate I was fetching the data and mapping it to render the content in the Testimonials sections of the application.

## Unfinished tasks

Unfortunately, due to personal time limitations, I wasn't able to fully develop some tasks until the due date established for this test (October 30th).

Below is a list of unfinished task and the strategy I was planning on following to complete them:

- Carousel for the Testimonials section: I only implemented a fixed layout to look similar to the one in the Figma file, but there's no interactivity with the arrow buttons or touch actions. For this task, I was planning on using [Swiperjs](https://swiperjs.com/), a library specific for carousel and other sliders. I've used it before and I believe it would be possible to personalize it to be fit with the design of this project;

- SEO Optimization: I developed the application using semantic HTML and used title and meta tags for a minimum website description, but I didn't apply other SEO techniques and optimization. I was planning on studying react-helmet, as mentioned in the test instructions, and verify how I could apply it to the project;

- Animation and performance: I added animations for a better user interaction with buttons and used the `picture` element to display the best image based on the screen size. I planned on using `React.lazy` and [Framer Motion](https://www.framer.com/motion/) library to optimize performance and add animations between sections, as the user scrolls through the content.

## Online demo

This project is deployed on Vercel and you can check it online on this link: https://buzzvel-2024-test.vercel.app/

A video demonstration is available on YouTube. You can click on the image below to watch it. Please, be advised that, due to my software recorder and video compression, the quality is inferior to the one seen in the online version. To get the full experience, please visit the website hosted in Vercel.

[![Soller demo](https://img.youtube.com/vi/SScM8bw8fNI/0.jpg)](https://www.youtube.com/watch?v=SScM8bw8fNI)