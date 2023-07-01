import LowerCard from "./LowerCard";
import UpperCard from "./UpperCard";
import { MyContextProvider } from "../hooks/myContext";

function Allcards() {
  return (
    <>
    <MyContextProvider/>
      <div className="container-fluid bg-primary">
        <div className="row db-wrapper">
          <div className="col col-1 one bg-danger"></div>
          <div className="col">
            <div className="row header">
              <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Bootstrap
                  </a>
                </div>
              </nav>
            </div>
            <div className="row top">
              <UpperCard />
            </div>
            <div className="row bottom">
              <div className="col col-8">
                <div className="row">
                  <LowerCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allcards;
