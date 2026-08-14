import eventImg from "../assets/projects/event.jpg";
import kloudevaImg from "../assets/projects/kloudeva.jpg";
import plansImg from "../assets/projects/plans.jpg";
import padachitraaniImg from "../assets/projects/padachitraani.jpg";
import shabdroopImg from "../assets/projects/shabdroop.jpg";
import varnasanyogahImg from "../assets/projects/varnasanyogah.jpg";
import collectionImg from "../assets/projects/collection.jpg";

export const PROJECTS = [
  {
    title: "Event Management Platform",
    desc: "Full-stack event management and ticket booking system — event listings, booking confirmation, ticket tracking, and payments via the Click.uz gateway.",
    tech: ["React", "Node.js", "MongoDB", "Click.uz API"],
    link: "https://event-management-website-tau.vercel.app/",
    image: eventImg,
  },
  {
    title: "Kloudeva Official Website",
    desc: "Official website of Kloudeva LLC, built solo — responsive UI, optimized performance, contact flow with EmailJS, and full deployment.",
    tech: ["React", "Tailwind CSS", "EmailJS"],
    link: "https://kloudeva.com/",
    image: kloudevaImg,
  },
  {
    title: "Game Subscription Platform",
    desc: "Subscription platform for an educational game catalog with Razorpay-powered payments and plan management.",
    tech: ["JavaScript", "React", "MySQL", "PHP"],
    link: "https://sanskritkalp.com/plans",
    image: plansImg,
  },
  {
    title: "Padachitraani",
    desc: "An interactive game where users shoot words at matching images to learn Sanskrit vocabulary.",
    tech: ["React", "Phaser.js", "MySQL", "PHP"],
    link: "https://sanskritkalp.com/samskrit-kreeda/padachitraani/",
    image: padachitraaniImg,
  },
  {
    title: "Shabdroop",
    desc: "A drag-and-drop Sanskrit learning game for practicing word forms.",
    tech: ["React", "Phaser.js", "MySQL", "PHP"],
    link: "https://sanskritkalp.com/samskrit-kreeda/shabdroop/",
    image: shabdroopImg,
  },
  {
    title: "Varnasanyogah",
    desc: "A puzzle game where users build complete Sanskrit words by arranging shuffled letters and syllables in the correct order.",
    tech: ["React", "MySQL", "PHP"],
    link: "https://sanskritkalp.com/samskrit-kreeda/varnasanyogah/",
    image: varnasanyogahImg,
  },
  {
    title: "Samskrit Kreeda — Game Collection",
    desc: "The full collection of 8+ interactive Sanskrit learning games I built independently during my time at AB&Kalp.",
    tech: ["React", "Phaser.js", "MySQL", "PHP"],
    link: "https://sanskritkalp.com/kalp/game-samskritam",
    image: collectionImg,
  },
];
