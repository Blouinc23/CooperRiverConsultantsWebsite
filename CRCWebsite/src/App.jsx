import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>

        <Navbar />


      <body>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer></footer>
      </body>

    </>
  );
}

export default App;
