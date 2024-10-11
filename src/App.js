import './App.css';
import Header from "./Components/Header"
import RecommendedVideos from './Components/RecommendedVideos';
import Sidebar from "./Components/Sidebar"
import SearchPage from './Components/SearchPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    // BEM CLASS NAMING CONVENTION

    <div className="app">

      <Header />



      <Routes>
        <Route path="search/:searchTerm" element={<>
          <div className="app__page">
            <Sidebar></Sidebar>
            <SearchPage></SearchPage>

          </div>
        </>} />


        <Route path="/" element={<>
          <div className="app__page">
            <Sidebar></Sidebar>
            <RecommendedVideos></RecommendedVideos>
          </div>

        </>}>

        </Route>
      </Routes>




    </div>
  );
}

export default App;
