import { BrowserRouter as Router } from "react-router-dom";

import App from "../containers/App";
import ThemeContextWrapper from "../context/darkMode";

export default function Root() {
  return (
    <Router>
      <ThemeContextWrapper>
        <App />
      </ThemeContextWrapper>
    </Router>
  );
}
