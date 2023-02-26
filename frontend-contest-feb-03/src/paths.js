import LandingPage from "./components/LandingPage/LandingPage";
import Detail from "./components/Detail/Detail";

const PATHS = {
  LANDING_PAGE: "/",
  MOVIE_DETAIL: "/movies/:hola",
};

export const PATHS_MAP = [
  {
    path: PATHS.LANDING_PAGE,
    component: <LandingPage />,
  },
  {
    path: PATHS.MOVIE_DETAIL,
    component: <Detail />,
  },
];
