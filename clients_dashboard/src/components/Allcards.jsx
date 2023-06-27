import UpperCard from "./UpperCard";

function Allcards() {
  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="row db-wrapper">
          <div className="col col-1 one bg-danger"></div>
          <div className="col">
            <div className="row header">
            <nav class="navbar bg-body-tertiary">
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
        </div>
        </div>
      </div>
    </>
  );
}

export default Allcards;
