import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Profile from "./page/Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/profile/jaeyeon">profile jaeyeon</Link>
        </li>
        <li>
          <Link to="/about?detail=true">about detail true</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userName" element={<Profile />} />
        <Route path="/*" element={<About />} />
        {/* <Route path={["/about", "/info"]} element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
