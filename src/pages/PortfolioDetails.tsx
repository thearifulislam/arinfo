import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import playerlogo01 from "../assets/logo-design/abstrack-mark/player-logo-1/1.jpg";
import playerlogo02 from "../assets/logo-design/abstrack-mark/player-logo-1/2.jpg";
import playerlogo03 from "../assets/logo-design/abstrack-mark/player-logo-1/3.jpg";
import playerlogo04 from "../assets/logo-design/abstrack-mark/player-logo-1/4.jpg";
import playerlogo05 from "../assets/logo-design/abstrack-mark/player-logo-1/5.jpg";
import playerlogo06 from "../assets/logo-design/abstrack-mark/player-logo-1/6.jpg";
import playerlogo07 from "../assets/logo-design/abstrack-mark/player-logo-1/7.jpg";
import playerlogo08 from "../assets/logo-design/abstrack-mark/player-logo-1/8.jpg";
import playerlogo09 from "../assets/logo-design/abstrack-mark/player-logo-1/9.jpg";
import playerlogo10 from "../assets/logo-design/abstrack-mark/player-logo-1/10.jpg";
import playerlogo11 from "../assets/logo-design/abstrack-mark/player-logo-1/11.jpg";
import playerlogo12 from "../assets/logo-design/abstrack-mark/player-logo-1/12.jpg";
import playerlogo13 from "../assets/logo-design/abstrack-mark/player-logo-1/13.jpg";
import playerlogo14 from "../assets/logo-design/abstrack-mark/player-logo-1/14.jpg";
import playerlogo15 from "../assets/logo-design/abstrack-mark/player-logo-1/15.jpg";
import playerlogo16 from "../assets/logo-design/abstrack-mark/player-logo-1/16.jpg";
import playerlogo17 from "../assets/logo-design/abstrack-mark/player-logo-1/17.jpg";

import lettermarkw1 from "../assets/logo-design/lettermark-logo/letter-w/1/1.jpg";
import lettermarkw2 from "../assets/logo-design/lettermark-logo/letter-w/1/2.jpg";
import lettermarkw3 from "../assets/logo-design/lettermark-logo/letter-w/1/3.jpg";
import lettermarkw4 from "../assets/logo-design/lettermark-logo/letter-w/1/4.jpg";
import lettermarkw5 from "../assets/logo-design/lettermark-logo/letter-w/1/5.jpg";
import lettermarkw6 from "../assets/logo-design/lettermark-logo/letter-w/1/6.jpg";
import lettermarkw7 from "../assets/logo-design/lettermark-logo/letter-w/1/7.jpg";
import lettermarkw8 from "../assets/logo-design/lettermark-logo/letter-w/1/8.jpg";
import lettermarkw9 from "../assets/logo-design/lettermark-logo/letter-w/1/9.jpg";
import lettermarkw10 from "../assets/logo-design/lettermark-logo/letter-w/1/10.jpg";
import lettermarkw11 from "../assets/logo-design/lettermark-logo/letter-w/1/11.jpg";

import lettermarkz1 from "../assets/logo-design/lettermark-logo/letter-z/1/1.jpg";
import lettermarkz2 from "../assets/logo-design/lettermark-logo/letter-z/1/2.jpg";
import lettermarkz3 from "../assets/logo-design/lettermark-logo/letter-z/1/3.jpg";
import lettermarkz4 from "../assets/logo-design/lettermark-logo/letter-z/1/4.jpg";
import lettermarkz5 from "../assets/logo-design/lettermark-logo/letter-z/1/5.jpg";
import lettermarkz6 from "../assets/logo-design/lettermark-logo/letter-z/1/6.jpg";
import lettermarkz7 from "../assets/logo-design/lettermark-logo/letter-z/1/7.jpg";
import lettermarkz8 from "../assets/logo-design/lettermark-logo/letter-z/1/8.jpg";
import lettermarkz9 from "../assets/logo-design/lettermark-logo/letter-z/1/9.jpg";
import lettermarkz10 from "../assets/logo-design/lettermark-logo/letter-z/1/10.jpg";
import lettermarkz11 from "../assets/logo-design/lettermark-logo/letter-z/1/11.jpg";
import lettermarkz12 from "../assets/logo-design/lettermark-logo/letter-z/1/12.jpg";
import lettermarkz13 from "../assets/logo-design/lettermark-logo/letter-z/1/13.jpg";
import lettermarkz14 from "../assets/logo-design/lettermark-logo/letter-z/1/14.jpg";

import arborSphere1 from "../assets/logo-design/combination-mark/nature-logo/1/1.jpg";
import arborSphere2 from "../assets/logo-design/combination-mark/nature-logo/1/2.jpg";
import arborSphere3 from "../assets/logo-design/combination-mark/nature-logo/1/3.jpg";
import arborSphere4 from "../assets/logo-design/combination-mark/nature-logo/1/4.jpg";
import arborSphere5 from "../assets/logo-design/combination-mark/nature-logo/1/5.jpg";
import arborSphere6 from "../assets/logo-design/combination-mark/nature-logo/1/6.jpg";
import arborSphere7 from "../assets/logo-design/combination-mark/nature-logo/1/7.jpg";
import arborSphere8 from "../assets/logo-design/combination-mark/nature-logo/1/8.jpg";
import arborSphere9 from "../assets/logo-design/combination-mark/nature-logo/1/9.jpg";
import arborSphere10 from "../assets/logo-design/combination-mark/nature-logo/1/10.jpg";
import arborSphere11 from "../assets/logo-design/combination-mark/nature-logo/1/11.jpg";
import arborSphere12 from "../assets/logo-design/combination-mark/nature-logo/1/12.jpg";
import arborSphere13 from "../assets/logo-design/combination-mark/nature-logo/1/13.jpg";
import arborSphere14 from "../assets/logo-design/combination-mark/nature-logo/1/14.jpg";
import arborSphere15 from "../assets/logo-design/combination-mark/nature-logo/1/15.jpg";
import arborSphere16 from "../assets/logo-design/combination-mark/nature-logo/1/16.jpg";
import arborSphere17 from "../assets/logo-design/combination-mark/nature-logo/1/17.jpg";
import arborSphere18 from "../assets/logo-design/combination-mark/nature-logo/1/18.jpg";
import arborSphere19 from "../assets/logo-design/combination-mark/nature-logo/1/19.jpg";
import arborSphere20 from "../assets/logo-design/combination-mark/nature-logo/1/20.jpg";
import arborSphere21 from "../assets/logo-design/combination-mark/nature-logo/1/21.jpg";
import arborSphere22 from "../assets/logo-design/combination-mark/nature-logo/1/22.jpg";

import mpPlayer from "../assets/logo-design/lettermark-logo/letter-mp/1/1.jpg";
import mpPlayer2 from "../assets/logo-design/lettermark-logo/letter-mp/1/2.jpg";
import mpPlayer3 from "../assets/logo-design/lettermark-logo/letter-mp/1/3.jpg";
import mpPlayer4 from "../assets/logo-design/lettermark-logo/letter-mp/1/4.jpg";
import mpPlayer5 from "../assets/logo-design/lettermark-logo/letter-mp/1/5.jpg";
import mpPlayer6 from "../assets/logo-design/lettermark-logo/letter-mp/1/6.jpg";
import mpPlayer7 from "../assets/logo-design/lettermark-logo/letter-mp/1/7.jpg";
import mpPlayer8 from "../assets/logo-design/lettermark-logo/letter-mp/1/8.jpg";
import mpPlayer9 from "../assets/logo-design/lettermark-logo/letter-mp/1/9.jpg";
import mpPlayer10 from "../assets/logo-design/lettermark-logo/letter-mp/1/10.jpg";
import mpPlayer11 from "../assets/logo-design/lettermark-logo/letter-mp/1/11.jpg";
import mpPlayer12 from "../assets/logo-design/lettermark-logo/letter-mp/1/12.jpg";
import mpPlayer13 from "../assets/logo-design/lettermark-logo/letter-mp/1/13.jpg";

import Uniflora from "../assets/logo-design/lettermark-logo/letter-u/1/1.jpg"
import Uniflora2 from "../assets/logo-design/lettermark-logo/letter-u/1/2.jpg"
import Uniflora3 from "../assets/logo-design/lettermark-logo/letter-u/1/3.jpg"
import Uniflora4 from "../assets/logo-design/lettermark-logo/letter-u/1/4.jpg"
import Uniflora5 from "../assets/logo-design/lettermark-logo/letter-u/1/5.jpg"
import Uniflora6 from "../assets/logo-design/lettermark-logo/letter-u/1/6.jpg"
import Uniflora7 from "../assets/logo-design/lettermark-logo/letter-u/1/7.jpg"
import Uniflora8 from "../assets/logo-design/lettermark-logo/letter-u/1/8.jpg"
import Uniflora9 from "../assets/logo-design/lettermark-logo/letter-u/1/9.jpg"
import Uniflora10 from "../assets/logo-design/lettermark-logo/letter-u/1/10.jpg"
import Uniflora11 from "../assets/logo-design/lettermark-logo/letter-u/1/11.jpg"
import Uniflora12 from "../assets/logo-design/lettermark-logo/letter-u/1/12.jpg"
import Uniflora13 from "../assets/logo-design/lettermark-logo/letter-u/1/13.jpg"
import Uniflora14 from "../assets/logo-design/lettermark-logo/letter-u/1/14.jpg"
import Uniflora15 from "../assets/logo-design/lettermark-logo/letter-u/1/15.jpg"
import Uniflora16 from "../assets/logo-design/lettermark-logo/letter-u/1/16.jpg"
import Uniflora17 from "../assets/logo-design/lettermark-logo/letter-u/1/17.jpg"
import Uniflora18 from "../assets/logo-design/lettermark-logo/letter-u/1/18.jpg"

import zepeq from "../assets/logo-design/lettermark-logo/letter-zpq/1/1.jpg";
import zepeq2 from "../assets/logo-design/lettermark-logo/letter-zpq/1/2.jpg";
import zepeq3 from "../assets/logo-design/lettermark-logo/letter-zpq/1/3.jpg";
import zepeq4 from "../assets/logo-design/lettermark-logo/letter-zpq/1/4.jpg";
import zepeq5 from "../assets/logo-design/lettermark-logo/letter-zpq/1/5.jpg";
import zepeq6 from "../assets/logo-design/lettermark-logo/letter-zpq/1/6.jpg";
import zepeq7 from "../assets/logo-design/lettermark-logo/letter-zpq/1/7.jpg";
import zepeq8 from "../assets/logo-design/lettermark-logo/letter-zpq/1/8.jpg";
import zepeq9 from "../assets/logo-design/lettermark-logo/letter-zpq/1/9.jpg";
import zepeq10 from "../assets/logo-design/lettermark-logo/letter-zpq/1/10.jpg";
import zepeq11 from "../assets/logo-design/lettermark-logo/letter-zpq/1/11.jpg";
import zepeq12 from "../assets/logo-design/lettermark-logo/letter-zpq/1/12.jpg";
import zepeq13 from "../assets/logo-design/lettermark-logo/letter-zpq/1/13.jpg";
import zepeq14 from "../assets/logo-design/lettermark-logo/letter-zpq/1/14.jpg";
import zepeq15 from "../assets/logo-design/lettermark-logo/letter-zpq/1/15.jpg";
import zepeq16 from "../assets/logo-design/lettermark-logo/letter-zpq/1/16.jpg";

import player from "../assets/logo-design/abstrack-mark/player-logo/2/1.jpg";
import player2 from "../assets/logo-design/abstrack-mark/player-logo/2/2.jpg";
import player3 from "../assets/logo-design/abstrack-mark/player-logo/2/3.jpg";
import player4 from "../assets/logo-design/abstrack-mark/player-logo/2/4.jpg";
import player5 from "../assets/logo-design/abstrack-mark/player-logo/2/5.jpg";
import player6 from "../assets/logo-design/abstrack-mark/player-logo/2/6.jpg";
import player7 from "../assets/logo-design/abstrack-mark/player-logo/2/7.jpg";
import player8 from "../assets/logo-design/abstrack-mark/player-logo/2/8.jpg";
import player9 from "../assets/logo-design/abstrack-mark/player-logo/2/9.jpg";
import player10 from "../assets/logo-design/abstrack-mark/player-logo/2/10.jpg";
import player11 from "../assets/logo-design/abstrack-mark/player-logo/2/11.jpg";
import player12 from "../assets/logo-design/abstrack-mark/player-logo/2/12.jpg";
import player13 from "../assets/logo-design/abstrack-mark/player-logo/2/13.jpg";
import player14 from "../assets/logo-design/abstrack-mark/player-logo/2/14.jpg";
import player15 from "../assets/logo-design/abstrack-mark/player-logo/2/15.jpg";

import ecogrow from "../assets/logo-design/combination-mark/nature-logo/2/1.jpg";
import ecogrow2 from "../assets/logo-design/combination-mark/nature-logo/2/2.jpg";
import ecogrow3 from "../assets/logo-design/combination-mark/nature-logo/2/3.jpg";
import ecogrow4 from "../assets/logo-design/combination-mark/nature-logo/2/4.jpg";
import ecogrow5 from "../assets/logo-design/combination-mark/nature-logo/2/5.jpg";
import ecogrow6 from "../assets/logo-design/combination-mark/nature-logo/2/6.jpg";
import ecogrow7 from "../assets/logo-design/combination-mark/nature-logo/2/7.jpg";
import ecogrow8 from "../assets/logo-design/combination-mark/nature-logo/2/8.jpg";
import ecogrow9 from "../assets/logo-design/combination-mark/nature-logo/2/9.jpg";
import ecogrow10 from "../assets/logo-design/combination-mark/nature-logo/2/10.jpg";
import ecogrow11 from "../assets/logo-design/combination-mark/nature-logo/2/11.jpg";
import ecogrow12 from "../assets/logo-design/combination-mark/nature-logo/2/12.jpg";
import ecogrow13 from "../assets/logo-design/combination-mark/nature-logo/2/13.jpg";
import ecogrow14 from "../assets/logo-design/combination-mark/nature-logo/2/14.jpg";
import ecogrow15 from "../assets/logo-design/combination-mark/nature-logo/2/15.jpg";
import ecogrow16 from "../assets/logo-design/combination-mark/nature-logo/2/16.jpg";


import winnest from "../assets/logo-design/wordmark/real-estate/1/1.jpg"
import winnest2 from "../assets/logo-design/wordmark/real-estate/1/2.jpg"
import winnest3 from "../assets/logo-design/wordmark/real-estate/1/3.jpg"
import winnest4 from "../assets/logo-design/wordmark/real-estate/1/4.jpg"
import winnest5 from "../assets/logo-design/wordmark/real-estate/1/5.jpg"
import winnest6 from "../assets/logo-design/wordmark/real-estate/1/6.jpg"
import winnest7 from "../assets/logo-design/wordmark/real-estate/1/7.jpg"
import winnest8 from "../assets/logo-design/wordmark/real-estate/1/8.jpg"
import winnest9 from "../assets/logo-design/wordmark/real-estate/1/9.jpg"
import winnest10 from "../assets/logo-design/wordmark/real-estate/1/10.jpg"
import winnest11 from "../assets/logo-design/wordmark/real-estate/1/11.jpg"
import winnest12 from "../assets/logo-design/wordmark/real-estate/1/12.jpg"
import winnest13 from "../assets/logo-design/wordmark/real-estate/1/13.jpg"
import winnest14 from "../assets/logo-design/wordmark/real-estate/1/14.jpg"
import winnest15 from "../assets/logo-design/wordmark/real-estate/1/15.jpg"
import winnest16 from "../assets/logo-design/wordmark/real-estate/1/16.jpg"
import winnest17 from "../assets/logo-design/wordmark/real-estate/1/17.jpg"

import nexus from "../assets/logo-design/combination-mark/tech-logo/1/1.jpg"
import nexus2 from "../assets/logo-design/combination-mark/tech-logo/1/2.jpg"
import nexus3 from "../assets/logo-design/combination-mark/tech-logo/1/3.jpg"
import nexus4 from "../assets/logo-design/combination-mark/tech-logo/1/4.jpg"
import nexus5 from "../assets/logo-design/combination-mark/tech-logo/1/5.jpg"
import nexus6 from "../assets/logo-design/combination-mark/tech-logo/1/6.jpg"
import nexus7 from "../assets/logo-design/combination-mark/tech-logo/1/7.jpg"
import nexus8 from "../assets/logo-design/combination-mark/tech-logo/1/8.jpg"
import nexus9 from "../assets/logo-design/combination-mark/tech-logo/1/9.jpg"
import nexus10 from "../assets/logo-design/combination-mark/tech-logo/1/10.jpg"
import nexus11 from "../assets/logo-design/combination-mark/tech-logo/1/11.jpg"
import nexus12 from "../assets/logo-design/combination-mark/tech-logo/1/12.jpg"
import nexus13 from "../assets/logo-design/combination-mark/tech-logo/1/13.jpg"
import nexus14 from "../assets/logo-design/combination-mark/tech-logo/1/14.jpg"
import nexus15 from "../assets/logo-design/combination-mark/tech-logo/1/15.jpg"
import nexus16 from "../assets/logo-design/combination-mark/tech-logo/1/16.jpg"
import nexus17 from "../assets/logo-design/combination-mark/tech-logo/1/17.jpg"
import nexus18 from "../assets/logo-design/combination-mark/tech-logo/1/18.jpg"
import nexus19 from "../assets/logo-design/combination-mark/tech-logo/1/19.jpg"
import nexus20 from "../assets/logo-design/combination-mark/tech-logo/1/20.jpg"
import nexus21 from "../assets/logo-design/combination-mark/tech-logo/1/21.jpg"
import nexus22 from "../assets/logo-design/combination-mark/tech-logo/1/22.jpg"
import nexus23 from "../assets/logo-design/combination-mark/tech-logo/1/23.jpg"

import momentum from "../assets/logo-design/abstrack-mark/men-fashion/1/1.jpg"
import momentum2 from "../assets/logo-design/abstrack-mark/men-fashion/1/2.jpg"
import momentum3 from "../assets/logo-design/abstrack-mark/men-fashion/1/3.jpg"
import momentum4 from "../assets/logo-design/abstrack-mark/men-fashion/1/4.jpg"
import momentum5 from "../assets/logo-design/abstrack-mark/men-fashion/1/5.jpg"
import momentum6 from "../assets/logo-design/abstrack-mark/men-fashion/1/6.jpg"
import momentum7 from "../assets/logo-design/abstrack-mark/men-fashion/1/7.jpg"
import momentum8 from "../assets/logo-design/abstrack-mark/men-fashion/1/8.jpg"
import momentum9 from "../assets/logo-design/abstrack-mark/men-fashion/1/9.jpg"
import momentum10 from "../assets/logo-design/abstrack-mark/men-fashion/1/10.jpg"
import momentum11 from "../assets/logo-design/abstrack-mark/men-fashion/1/11.jpg"
import momentum12 from "../assets/logo-design/abstrack-mark/men-fashion/1/12.jpg"
import momentum13 from "../assets/logo-design/abstrack-mark/men-fashion/1/13.jpg"
import momentum14 from "../assets/logo-design/abstrack-mark/men-fashion/1/14.jpg"
import momentum15 from "../assets/logo-design/abstrack-mark/men-fashion/1/15.jpg"
import momentum16 from "../assets/logo-design/abstrack-mark/men-fashion/1/16.jpg"
import momentum17 from "../assets/logo-design/abstrack-mark/men-fashion/1/17.jpg"
import momentum18 from "../assets/logo-design/abstrack-mark/men-fashion/1/18.jpg"
import momentum19 from "../assets/logo-design/abstrack-mark/men-fashion/1/19.jpg"
import momentum20 from "../assets/logo-design/abstrack-mark/men-fashion/1/20.jpg"
import momentum21 from "../assets/logo-design/abstrack-mark/men-fashion/1/21.jpg"
import momentum22 from "../assets/logo-design/abstrack-mark/men-fashion/1/22.jpg"

import bloodDonation1 from "../assets/logo-design/combination-mark/health-care-logo/1/1.jpg"
import bloodDonation2 from "../assets/logo-design/combination-mark/health-care-logo/1/2.jpg"
import bloodDonation3 from "../assets/logo-design/combination-mark/health-care-logo/1/3.jpg"
import bloodDonation4 from "../assets/logo-design/combination-mark/health-care-logo/1/4.jpg"




// for business card


import minimalist1 from "../assets/business-card/minimalist/1/1.jpg"
import minimalist2 from "../assets/business-card/minimalist/2/1.jpg"



// for letterhead

import modern1 from "../assets/letterhead/modern/1/Modern Letterhead.jpg"
import minimalistandcorporate1 from "../assets/letterhead/minimalist-corporate/1/minimalist corporate letterhead.jpg"
import modernandboldcorporate1 from "../assets/letterhead/modern&bold-corporate/1/modern and bold corporate letterhead.jpg"
import modernandboldcorporate2 from "../assets/letterhead/modern&bold-corporate/2/modern and bold corporate letterhead-2.jpg"
import modernandcorporate1 from "../assets/letterhead/modern&corporate/1/modern and corporate letterhead design.jpg"
import modernanddynamiccorporate1 from "../assets/letterhead/modern&dynamic-corporate/1/modern and dynamic corporate letterhead.jpg"
import modernandgeometriccorporate1 from "../assets/letterhead/modern&geometric-corporate/1/modern and geometric corporate letterhead.jpg"
import modernandminimalistcorporate1 from "../assets/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg"



// for facebook cover

import facebookcover1 from "../assets/social-cover/facebook-cover/1/1.jpg"
import facebookcover2 from "../assets/social-cover/facebook-cover/1/2.jpg"
import facebookcover3 from "../assets/social-cover/facebook-cover/1/3.jpg"


// for banner

import promotionalbanner1 from "../assets/banner/promotional/1/1.jpg"



import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  Tag,
  Wrench,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  useorunuse: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  tools: string[];
  images: string[];
  behanceUrl?: string;
}

const projects: Project[] = [

 



  {
    id: "player-logo-design-1",
    title: "Player Logo Design",
    category: "Logo Design",
    client: "Portfolio",
    date: "October 2023",
    useorunuse: "Unuse logo",
    description:
      "A complete user interface and experience design for a mental wellness mobile application.",

    challenge:
      "MindSpace needed a user-friendly, calming interface for their mental wellness app that would appeal to users of all ages. The design needed to balance functionality with an emotionally supportive aesthetic.",
    solution:
      "I designed an intuitive interface with a soft color palette and generous white space to create a sense of calm. The navigation was simplified to reduce cognitive load, and accessibility was prioritized throughout. Interactive elements include subtle animations that respond to user actions in a gentle, encouraging manner.",
    outcome:
      "User testing showed a 40% improvement in task completion rates compared to the previous version of the app. User satisfaction metrics increased by 65%, and the average session time increased by 3 minutes, indicating stronger user engagement.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    images: [
      playerlogo01,
      playerlogo02,
      playerlogo03,
      playerlogo04,
      playerlogo05,
      playerlogo06,
      playerlogo07,
      playerlogo08,
      playerlogo09,
      playerlogo10,
      playerlogo11,
      playerlogo12,
      playerlogo13,
      playerlogo14,
      playerlogo15,
      playerlogo16,
      playerlogo17,
    ],
  },





  {
    id: "lettermark-W-Logo-1",
    title: "Wind – A Symbol of Motion and Freedom",
    category: "Logo Design",
    client: "Portfolio",
    date: "October 2023",
    useorunuse: "Unuse logo",
    description:
      "A complete user interface and experience design for a mental wellness mobile application.",

    challenge:
      "MindSpace needed a user-friendly, calming interface for their mental wellness app that would appeal to users of all ages. The design needed to balance functionality with an emotionally supportive aesthetic.",
    solution:
      "I designed an intuitive interface with a soft color palette and generous white space to create a sense of calm. The navigation was simplified to reduce cognitive load, and accessibility was prioritized throughout. Interactive elements include subtle animations that respond to user actions in a gentle, encouraging manner.",
    outcome:
      "User testing showed a 40% improvement in task completion rates compared to the previous version of the app. User satisfaction metrics increased by 65%, and the average session time increased by 3 minutes, indicating stronger user engagement.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    images: [
      lettermarkw1,
      lettermarkw2,
      lettermarkw3,
      lettermarkw4,
      lettermarkw5,
      lettermarkw6,
      lettermarkw7,
      lettermarkw8,
      lettermarkw9,
      lettermarkw10,
      lettermarkw11,
    ],
  },

  {
    id: "lettermark-Z-Logo-1",
    title: "ZXON – The Future of Innovation & Technology",
    category: "Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      lettermarkz1,
      lettermarkz2,
      lettermarkz3,
      lettermarkz4,
      lettermarkz5,
      lettermarkz6,
      lettermarkz7,
      lettermarkz8,
      lettermarkz9,
      lettermarkz10,
      lettermarkz11,
      lettermarkz12,
      lettermarkz13,
      lettermarkz14,
    ],
  },



  {
    id: "combination-mark-naturelogo-1",
    title: "ArborSphere: Cultivating Growth & Sustainability",
    category: "combination Mark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [

      arborSphere1,
      arborSphere2,
      arborSphere3,
      arborSphere4,
      arborSphere5,
      arborSphere6,
      arborSphere7,
      arborSphere8,
      arborSphere9,
      arborSphere10,
      arborSphere11,
      arborSphere12,
      arborSphere13,
      arborSphere14,
      arborSphere15,
      arborSphere16,
      arborSphere17,
      arborSphere18,
      arborSphere19,
      arborSphere20,
      arborSphere21,
      arborSphere22

    ],
  },

  {
    id: "lettermark-mp-player-1",
    title: "Meloplay: Where Music Meets Play",
    category: "Lettermark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [

      mpPlayer,
      mpPlayer2,
      mpPlayer3,
      mpPlayer4,
      mpPlayer5,
      mpPlayer6,
      mpPlayer7,
      mpPlayer8,
      mpPlayer9,
      mpPlayer10,
      mpPlayer11,
      mpPlayer12,
      mpPlayer13

    ],
  },
  {
    id: "lettermark-u-Logo-1",
    title: "Uniflora: Dual-Orientation Botanical Elegance",
    category: "Lettermark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      Uniflora,
      Uniflora2,
      Uniflora3,
      Uniflora4,
      Uniflora5,
      Uniflora6,
      Uniflora7,
      Uniflora8,
      Uniflora9,
      Uniflora10,
      Uniflora11,
      Uniflora12,
      Uniflora13,
      Uniflora14,
      Uniflora15,
      Uniflora16,
      Uniflora17,
      Uniflora18,

    ],
  },




  // business card details

  {
    id: "minimalist-business-card-1",
    title: "Minimalist Business Card Design: Embrace the Logo’s Essence",
    category: "Minimalist Business Card",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      minimalist1,

    ],
  },

  {
    id: "minimalist-business-card-2",
    title: "Minimalist Design, Maximum Impact",
    category: "Minimalist Business Card",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      minimalist2,

    ],
  },

  {
    id: "lettermark-zpq-Logo-1",
    title: "Zepeq: Modern & Bold Brand Identity",
    category: "Lettermark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      zepeq,
      zepeq2,
      zepeq3,
      zepeq4,
      zepeq5,
      zepeq6,
      zepeq7,
      zepeq8,
      zepeq9,
      zepeq10,
      zepeq11,
      zepeq12,
      zepeq13,
      zepeq14,
      zepeq15,
      zepeq16,

    ],
  },

  {
    id: "abstrack-mark-player-logo-2",
    title: "Player: Mobile Media Player Logo",
    category: "Abstrack Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      player,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
      player12,
      player13,
      player14,
      player15

    ],
  },

  {
    id: "combination-mark-naturelogo-2",
    title: "EcoGrow: Sustainable Living Brand",
    category: "Combination mark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      ecogrow,
      ecogrow2,
      ecogrow3,
      ecogrow4,
      ecogrow5,
      ecogrow6,
      ecogrow7,
      ecogrow8,
      ecogrow9,
      ecogrow10,
      ecogrow11,
      ecogrow12,
      ecogrow13,
      ecogrow14,
      ecogrow15,
      ecogrow16,

    ],
  },

  {
    id: "wormark-realestate-1",
    title: "New WinNest Properties Logo Reveal",
    category: "Wordmark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      winnest,
      winnest2,
      winnest3,
      winnest4,
      winnest5,
      winnest6,
      winnest7,
      winnest8,
      winnest9,
      winnest10,
      winnest11,
      winnest12,
      winnest13,
      winnest14,
      winnest15,
      winnest16,
      winnest17,

    ],
  },


  {
    id: "combination-mark-techlogo-1",
    title: "NEXUS – Where Innovation Meets Connection",
    category: "Combination mark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      nexus,
      nexus2,
      nexus3,
      nexus4,
      nexus5,
      nexus6,
      nexus7,
      nexus8,
      nexus9,
      nexus10,
      nexus11,
      nexus12,
      nexus13,
      nexus14,
      nexus15,
      nexus16,
      nexus17,
      nexus18,
      nexus19,
      nexus20,
      nexus21,
      nexus22,
      nexus23,

    ],
  },


  // for letterhead




  {
    id: "modern-letterhead-1",
    title: "Modern Letterhead Design: Professional & Clean",
    category: "Modern Letterhead",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      modern1,

    ],
  },



  {
    id: "minimalist-corporate-letterhead-1",
    title: "Minimalist Corporate Letterhead Design: Elegant & Professional",
    category: "Minimalist Corporate Letterhead",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      minimalistandcorporate1,
    ],
  },

  {
    id: "minimalist-bold-corporate-letterhead-1",
    title: "Modern & Bold Corporate Letterhead Design",
    category: "Minimalist & Bold Corporate Letterhead",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      modernandboldcorporate1,
    ],
  },


  {
    id: "minimalist-bold-corporate-letterhead-2",
    title: "Clean & Impactful Letterhead",
    category: "Minimalist & Bold Corporate Letterhead",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      modernandboldcorporate2,
    ],
  },

  {
    id: "modern&corporate-letterhead-1",
    title: "Modern Corporate Letterhead Design",
    category: "Minimalist & Bold Corporate Letterhead",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      modernandcorporate1,
    ],
  },


  {
    id: "modern&dynamic-corporate-letterhead-1",
    title: "Clean Curve Letterhead Design",
    category: "Modern & Dynamic Corporate Letterhead",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      modernanddynamiccorporate1,
    ],
  },

  {
    id: "modern&geometric-corporate-letterhead-1",
    title: "Modern & Geometric Corporate Letterhead Design",
    category: "Modern & Geometric Corporate Letterhead",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      modernandgeometriccorporate1,
    ],
  },

  {
    id: "modern&minimalist-corporate-letterhead-1",
    title: "Modern & Minimalist Corporate Letterhead Design",
    category: "Modern & Minimalist Corporate Letterhead",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      modernandminimalistcorporate1,
    ],
  },



  {
    id: "abstract-mark-men-fashion-1",
    title: "The Momentum Menswear Identity",
    category: "Abstract Mark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      momentum,
      momentum2,
      momentum3,
      momentum4,
      momentum5,
      momentum6,
      momentum7,
      momentum8,
      momentum9,
      momentum10,
      momentum11,
      momentum12,
      momentum13,
      momentum14,
      momentum15,
      momentum16,
      momentum17,
      momentum18,
      momentum19,
      momentum20,
      momentum21,
      momentum22,
    ],
  },







  {
    id: "facebook-cover-1",
    title: "Professional Facebook Cover Pack",
    category: "Facebook Cover Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      facebookcover1,
    ],
  },



  {
    id: "promotional-banner-1",
    title: "Winter Special: Super Sale is Here",
    category: "Promotional Banner Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      promotionalbanner1,
    ],
  },



  {
    id: "combination-mark-health-care-logo-1",
    title: "Donate Blood, Save Lives",
    category: "Combination Mark Logo Design",
    client: "For prortfolio",
    date: "June 2024",
    useorunuse: "Unuse logo",
    description:
      "High-end photo retouching for a luxury cosmetics brand's product line.",
    challenge:
      "Luxury Cosmetics needed professional product photography editing for their new skincare line. The images needed to highlight product details and textures while maintaining a consistent, premium aesthetic across the entire collection.",
    solution:
      "I performed advanced photo retouching techniques to enhance product details without making the images look artificially manipulated. This included color correction, removing imperfections, adjusting lighting, and creating realistic reflections. Special attention was paid to texture details and maintaining color accuracy.",
    outcome:
      "The retouched images were used in the brand's e-commerce store, social media campaigns, and print advertisements. The client reported a 25% increase in online sales conversion rates after implementing the new product imagery.",
    tools: ["Adobe Photoshop", "Capture One", "Adobe Lightroom"],
    images: [
      bloodDonation1,
      bloodDonation2,
      bloodDonation3,
      bloodDonation4,
    ],
  },


];

const PortfolioDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);

    // In a real application, this would be an API call to fetch the project details
    const foundProject = projects.find((p) => p.id === id);

    // Simulate API call delay
    setTimeout(() => {
      setProject(foundProject || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="bg-dark min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 rounded-full border-2 border-[rgb(56,132,255)] border-t-transparent animate-spin"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-dark min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
            <p className="text-white/70 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/portfolio" className="outline-button">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-dark-card">
          <div className="container mx-auto px-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-[rgb(56,132,255)] text-sm font-medium uppercase tracking-wider mb-2 inline-block">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h1>

                <p className="text-white/80 mb-8 text-lg">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass-card p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 text-white mr-2" />
                      <span className="text-white/70 text-sm">
                        Project Date
                      </span>
                    </div>
                    <p>{project.date}</p>
                  </div>

                  <div className="glass-card p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 text-white mr-2" />
                      <span className="text-white/70 text-sm">
                        Used Or Unused
                      </span>
                    </div>
                    <p>{project.useorunuse}</p>
                  </div>

                  <div className="glass-card p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Tag className="h-4 w-4 text-white mr-2" />
                      <span className="text-white/70 text-sm">Category</span>
                    </div>
                    <p>{project.category}</p>
                  </div>

                  <div className="glass-card p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Wrench className="h-4 w-4 text-white mr-2" />
                      <span className="text-white/70 text-sm">Client</span>
                    </div>
                    <p>{project.client}</p>
                  </div>
                </div>

                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center outline-button"
                  >
                    View on Behance <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>

              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden glass-card border border-white/10">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="">
              {/* Project Gallery */}
              {project.id !== "facebook-cover-1" && (
                <div>
                  <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="rounded-xl overflow-hidden glass-card border border-white/10"
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-16 mt-16">
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

                <div className="glass-card rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-neon">
                    The Challenge
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="glass-card rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-neon">
                    The Solution
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="glass-card rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-neon">
                    The Outcome
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Tools Used */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Tools Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-dark-card rounded-full text-sm border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's work together to create a stunning design that elevates your
              brand and engages your audience.
            </p>
            <Link to="/contact" className="primary-button">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioDetails;
