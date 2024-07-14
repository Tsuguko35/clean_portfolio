import { Landingpage } from "../pages";

const routes = [
  {
    path: "/",
    component: <Landingpage />,
  },
  {
    path: "/*",
    component: <Landingpage />,
  },
  {
    path: "/Projects",
    component: <Landingpage />,
  },
  {
    path: "/About",
    component: <Landingpage />,
  },
  {
    path: "/Contact",
    component: <Landingpage />,
  },
];

export default routes;
