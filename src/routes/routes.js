// dashboar components
import Home from "../containers/Home";

// auth components
import Auth from "../containers/Auth";

export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Auth />,
      },
    ],
  },
];

export const privateRoutes = [
  {
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
