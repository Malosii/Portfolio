import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import EchoesSummer from "./pages/EchoesSummer";
import EventPlatform from "./pages/EventPlatform";
import RedFox from "./pages/RedFox";
import InsideOut from "./pages/InsideOut";
import CinemaDatabase from "./pages/CinemaDatabase";
import WarehouseSystem from "./pages/WarehouseSystem";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/echoes-summer"
          element={<EchoesSummer />}
        />

        <Route
          path="/projects/event-platform"
          element={<EventPlatform />}
        />

        <Route
          path="/projects/red-fox"
          element={<RedFox />}
        />

        <Route
          path="/projects/insideout"
          element={<InsideOut />}
        />

        <Route
          path="/projects/cinema-database"
          element={<CinemaDatabase />}
        />

        <Route
          path="/projects/warehouse-system"
          element={<WarehouseSystem />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;