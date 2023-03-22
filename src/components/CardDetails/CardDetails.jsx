import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [fetchedData, updateFechedData] = useState([]);
  const { name, image, location, origin, gender, species, status, type } =
    fetchedData;

  console.log(fetchedData);

  const api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFechedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-2">
        <h1 className="text-center"> {name}</h1>
        <img src={image} alt="" className="img-fluid" />

        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}

        <div className="content">
          <div className="">
            <span className="fw-bold">Gender: </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Type: </span>
            {type === "" ? "Unknown" : type}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location && location.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin && origin.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
