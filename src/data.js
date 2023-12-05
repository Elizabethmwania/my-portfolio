import proj1 from './images/project1.png';
import proj2 from './images/project2.png';
import proj3 from './images/limuru.png';
import proj4 from './images/tesla.png';
import proj5 from './images/nlfp.jpeg';
import img1 from './images/testimonial1.png';
import img2 from './images/testimonial2.png';
export const projects = [
  {
    title: "Lawyers Networking Platform",
    subtitle: "Django REST, ReactJS",
    description:
      "A platform that connects advocates with other service providers in the legal system aiming to achieve optimum practice.",
    image: proj5,
    link: "https://lawyers-networking-platform-frontend.vercel.app/",
  },
  {
    title: "Limuru Cheshire",
    subtitle: "React, Redux",
    description:
      "A platform for joining all well wishers to support in donating and sharing to the marginalized.",
    image: proj3,
    link: "https://limuru-cheshire-webapp-frontend.vercel.app/"
  },
    {
      title: "Tesla Cars",
      subtitle: "React toolkit, Redux",
      description:
        "This application shows a variety of Tesla models, where a buy can sign up to purchase their desired model",
      image: proj4,
      link: "https://tesla-ecommerce-reactjs-main.vercel.app/",
    },
    
    {
      title: "Mobifarm Farmers",
      subtitle: "React and Python",
      description:
        "A platform where farmers are trained various skills to enable them harvest quality products and meet clients globally",
      image: proj2,
      link: "https://mobifarm-app-frontend.vercel.app/",
    },
    
    {
      title: "Her Hustle",
      subtitle: "WordPress, CMS",
      description:
        "Her Hustle is a social enterprise born out of the need to create a community for young women in business looking to grow and scale their business.",
      image: proj1,
      link: "https://herhustle.co.ke/",
    },
    
    
  ];

  // skills data
  export const skills = [
    {
      id: 1,
      name: 'Java,Spring,SpringBoot',
      
    },
    {
      id: 2,
      name: 'JavaScript,HTML5',
      
    },
    {
      id: 3,
      name: 'Python,Django REST',
      
    },
    {
      id: 4,
      name: 'ReactJS,Typescript,Redux',
    },
    {
      id: 5,
      name: 'MySQL, Oracle, Postgresql',
    },
    {
      id: 6,
      name: 'Tailwind,CSS,Sass,Bootstrap',
    },
  ];

  // testmonials
  export const testimonials = [
    {
      id: 1,
      quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est distincto so no.',
      image: img1,
      name: 'Rafi Adela',
      company: 'Google'

    },
    {
      id: 2,
      quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit ipsa delectus eum quo voluptas aspernatur accusantium distinctio possimus est distincto so no.',
      image: img2,
      name: 'Guzman Henry',
      company: 'Amazon'
    },

  ]