// Modulos de bibliotecas
import { useState, useEffect, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Componentes
import SearchBar from "./components/SearchBar/SearchBar";
import Filters from "./components/Category/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";
import CardDetails from "./components/CardDetails/CardDetails";
// Paginas
import Episodes from "./pages/Episodes/Episodes";
import Location from "./pages/Location/Location";
// Estilos
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchBar, setSearchBar] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [fetchedData, updateFechedData] = useState([]);
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchBar}&status=${status}&gender=${gender}&species=${species}`;

  // USEMEMO

  /*  const api = useMemo(
    () =>
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchBar}&status=${status}&gender=${gender}&species=${species}`,
    [pageNumber, searchBar, status, gender, species]
  ); */

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFechedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <SearchBar setPageNumber={setPageNumber} setSearchBar={setSearchBar} />

      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
