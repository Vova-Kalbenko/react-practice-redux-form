import { Routes, Route } from "react-router-dom"
import { lazy } from "react";
// import Dogs from "./pages/Dogs";
// import DogDetails from "./pages/DogDetails";
import Layout from "./pages/Layout"
import Gallery from "./pages/Gallery";
import Subbreeds from "./pages/Subbreeds";
const Home = lazy(() => import("./pages/Home"));
const Dogs = lazy(() => import("./pages/Dogs"));
const DogDetails = lazy(() => import("./pages/DogDetails"));
// const Gallery = lazy(() => import("./pages/Gallery"));
// const Subbreeds = lazy(() => import("./pages/Subbreeds"));

export const App = () => {



  return (




    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />} >
          <Route path="subbreeds" element={<Subbreeds/>} />
          <Route path="gallery" element={<Gallery/>} />
        </Route>
      </Route>
      {/* это на какой елемент переводит */}

    </Routes>

  );
};

