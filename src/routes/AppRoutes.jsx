import MainLayout from "../components/layouts";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const AppRoutes = [
  {
    name: "main",
    path: "/",
    Component: MainLayout,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        requireAuth: false,
        Component: () => <h1>Hello</h1>
      },
    ]
  },

  {
    key: "404",
    name: "404",
    path: "*",
    Component: NotFound
  }
]

export default AppRoutes;