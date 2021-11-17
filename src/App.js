
import {
  Routes, Route
} from "react-router-dom";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import CustomDrawer from "./components/CustomDrawer";
import CustomBookRender from "./components/CustomBookRender";
import Information from "./pages/Information";
import Instructions from "./pages/Instructions";

function App() {

  return (
    <Container>
      <CustomDrawer>
        <Routes>
          <Route exact path="/" element={<Home />} />,
          <Route path="/book/frogbook1" element={<CustomBookRender bookName={"Frogbook"} version={"1"} bookLength={"8"} />} />
          <Route path="/book/frogbook2" element={<CustomBookRender bookName={"Frogbook"} version={"2"} bookLength={"8"} />} />
          <Route path="/book/frogbook3" element={<CustomBookRender bookName={"Frogbook"} version={"3"} bookLength={"8"} />} />
          <Route path="/information" element={<Information />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </CustomDrawer >
    </Container>
  );
}

export default App;
