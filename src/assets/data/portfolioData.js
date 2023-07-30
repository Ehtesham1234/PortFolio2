import portfolioImg01 from "../images/Amazon-Clone.png";
import portfolioImg02 from "../images/MoviesApp.png";
import portfolioImg03 from "../images/Lyrics-app.png";
import portfolioImg04 from "../images/CrudAppFirebase.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Front End",
    title: "Ecommerce Website",
    description:
      "Implemented features such as product listings, shopping cart functionality, and user authentication.",
    technologies: [
      "React",
      "Html",
      "Css",
      "Javascript",
      "Firebase",
      "custom Hook",
    ],
    siteUrl: "https://clone-6f6ee.firebaseapp.com/",
    gitUrl: "https://github.com/Ehtesham1234/Amazon-Clone/tree/master",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Front End",
    title: "Movies App",
    description:
      "Having the functionality of getting Trending Movies, All movie, TV Series and you can search any movie. • Users can check movie details• Using Material UI for design the UI of the Project • Using The Movie DB API for getting data of movies • Managing state, Routing, Pagination.",
    technologies: [
      "React",
      "Html",
      "Css",
      "Javascript",
      "Rapid Api",
      "custom Hook",
    ],
    siteUrl: "https://ehtesham1234.github.io/Movies_List/",
    gitUrl: "https://github.com/Ehtesham1234/Movies_List",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Front End",
    title: "Lyrics App",
    description:
      "Function: Searching songs by it's name and fetching lyrics from API.HTML, CSS, and Bootstrap are used to design the UI of the project.JavaScript is used for getting data from API and rendering in UI.",
    technologies: ["Html", "Css", "Javascript"],
    siteUrl: "https://ehtesham1234.github.io/Lyrics_App-New/",
    gitUrl: "https://github.com/Ehtesham1234/Lyrics_App-New",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Backend",
    title: "Crud App",
    description:
      "Have the all Crud Features to add , delete , update the contact list with search option to seach the users. Firebase is used in this app to store data and added Toaster to give alert on every step",
    technologies: [
      "React",
      "Html",
      "Tailwind Css",
      "Javascript",
      "Firebase",
      "custom Hook",
      "Formik",
      "Toaster",
    ],
    siteUrl: "https://ehtesham1234.github.io/Crud-App-Firebase/",
    gitUrl: "https://github.com/Ehtesham1234/Crud-App-Firebase",
  },
];

export default portfolios;
