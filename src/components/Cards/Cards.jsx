import { Link } from "react-router-dom";
import { CardsContainer, CardsImg, CardsBadge } from "./StyledCards";
import s from "./style.module.css";

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      const { id, name, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${s.cards} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt="" className={`${s.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-5">Last Location</div>
                <div className="fs-6">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${s.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${s.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${s.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found 🛑";
  }

  // STYLED COMPONENTS

  /* if (results) {
    display = results.map((x) => {
      const { id, name, image, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <CardsContainer className="d-flex flex-column justify-content-center">
            <CardsImg>
              <img src={image} alt="" className="img-fluid" />
            </CardsImg>
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-5">Last Location</div>
                <div className="fs-6">{location.name}</div>
              </div>
            </div>
            {(() => {
              if (status === "Dead") {
                return (
                  <CardsBadge className="position-absolute badge bg-danger">
                    {status}
                  </CardsBadge>
                );
              } else if (status === "Alive") {
                return (
                  <CardsBadge className="position-absolute badge bg-success">
                    {status}
                  </CardsBadge>
                );
              } else {
                return (
                  <CardsBadge className="position-absolute badge bg-secondary">
                    {status}
                  </CardsBadge>
                );
              }
            })()}
          </CardsContainer>
        </Link>
      );
    });
  } else {
    display = "No Characters Found 🛑";
  } */

  return <>{display}</>;
};

export default Cards;
