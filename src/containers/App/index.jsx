import { useRoutes } from "react-router-dom";

import { privateRoutes } from "../../routes/routes";

export default function App() {
  return useRoutes(privateRoutes);
}
