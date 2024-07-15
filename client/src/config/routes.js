import { About, Landingpage, Projects } from "../pages";

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
    component: <Projects />,
  },
  {
    path: "/About",
    component: <About />,
  },
  {
    path: "/Contact",
    component: <Landingpage />,
  },
];

export default routes;
