import { BrowserRouter as Router } from "react-router-dom";

import App from "../containers/App";

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
