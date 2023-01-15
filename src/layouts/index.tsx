import { BrowserRouter } from "react-router-dom";

import { PageViews } from "../views";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageViews />
      </BrowserRouter>
    </>
  );
}

export default App;
