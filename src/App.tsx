import { Fragment } from "react";
import "./dist/output.css";
import "./App.css";
import BodyContent from "./components/TableRanking";
import AppBarHeader from "./components/AppBar";
import FooterPage from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Fragment>
        <AppBarHeader />

        <BodyContent />

        <FooterPage />
      </Fragment>
    </div>
  );
}

export default App;
