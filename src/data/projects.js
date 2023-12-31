import smartEdukacjaImg from "../images/smart-edukacja.png";
import smartEdukacjaImgAnnouncemet from "../images/smart-edukacja-announcement.png";
import smartEdukacjaImgFilters from "../images/smart-edukacja-filters.png";
import smartEdukacjaImgCreateAds from "../images/smart-edukacja-create-ads.png";
import smartEdukacjaImgMyAdds from "../images/smart-edukacja-my-adds.png";
import smartEdukacjaImgRegistration from "../images/smart-edukacja-registration.png";
import beutifulPlacesImgMap from "../images/unusual-places-in-the-world-map.png";
import beutifulPlacesImgNewPlace from "../images/unusual-places-in-the-world-map-new-place.png";
import beutifulPlacesImg from "../images/unusual-places-in-the-world.png";
import colorizeImg from "../images/colorize2.png";
import colorizeImgSearch from "../images/colorize-search.png";
import colorizeImgCompare from "../images/colorize-compare.png";

export const projectsData = [
  {
    title: "SmartEdukacja.pl",
    mainImg: smartEdukacjaImg,
    mainDesc: `SmartEdukacja is my biggest project so far. It is a portal that allows you to post tutoring ads and allows you to view and browse them using a map. It allows you to create an account, create new ads, delete and edit existing ones, and of course to filter them. For the site, I also created a database using MySQL and backend using Node.js and Express. I am still working on the site improving the code and adding new features. 
      (IMPORTANT: Ads can take a while to load because I use a free plan to host my api, which is automatically spun down after 15 minutes of inactivity.)`,
    pageLink: "https://matitzo.github.io/tutoring-on-map/",
    gitHubLink: "",
    pages: [
      {
        id: 1,
        img: smartEdukacjaImgFilters,
        descList: [
          "Browse announcements using map.",
          "Filter announcements by: subject, address, voivodiship, learning mode or price.",
          "View announcement location by hovering or clicking on it.",
        ],
      },
      {
        id: 2,
        img: smartEdukacjaImgAnnouncemet,
        descList: [
          "View announcement details.",
          "Navigate between locations (map will update automatically).",
        ],
      },
      {
        id: 3,
        img: smartEdukacjaImgRegistration,
        descList: [
          "Log in to your account (generating token).",
          "Create an account (your data are encrypted).",
        ],
      },
      {
        id: 4,
        img: smartEdukacjaImgCreateAds,
        descList: [
          "Create you announcement.",
          "Enter details for the announcement in the form (form validation included).",
          "Choose locations using map.",
          "Change address if it doesn't suit you.",
          "Add description using Microsoft Word like app.",
        ],
      },
      {
        id: 5,
        img: smartEdukacjaImgMyAdds,
        descList: [
          "View profile data.",
          "Browse, view, edit, delete your announcements.",
        ],
      },
    ],
  },
  {
    title: "Beautiful places in the world",
    mainImg: beutifulPlacesImg,
    mainDesc:
      "The site depicts unusual places on Earth that most people are unaware of. It was created using React.js and Leaflet libraries. A feature of the site is the ability to view the location of listed places using an interactive map. The map updates its own view as the article reader progresses.",
    pageLink: "https://matitzo.github.io/Unusual-places-in-the-world/",
    gitHubLink: "https://github.com/Matitzo/Unusual-places-in-the-world",
    pages: [
      {
        id: 1,
        img: beutifulPlacesImgMap,
        descList: [
          "Learn about unusual places on Earth.",
          "Navigate using interactive map.",
        ],
      },
      {
        id: 2,
        img: beutifulPlacesImgNewPlace,
        descList: ["Add new unique place."],
      },
    ],
  },
  {
    title: "Colorize",
    mainImg: colorizeImg,
    mainDesc:
      "A web application that allows users to browse and filter available paints and compare colors. It is also possible to send the current status of the page (results of filters or currently compared colors) to other users, who will receive the same status as the person sharing the link after opening it.",
    pageLink: "https://matitzo.github.io/colorize/",
    gitHubLink: "https://github.com/Matitzo/colorize",
    pages: [
      {
        id: 1,
        img: colorizeImgCompare,
        descList: [
          "Compare colors using their name, rgb or hex value.",
          "Share the current status of the site via link.",
        ],
      },
      {
        id: 2,
        img: colorizeImgSearch,
        descList: [
          "Browse and filter the offered products.",
          "Share the current status of the site via link.",
        ],
      },
    ],
  },
];
