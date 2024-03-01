import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./common/Layout";
import Home from '../src/components/Home/Home'

function App() {
  return (
    <>
    <HashRouter>
        <Layout>
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            {/* <Route exact path="/perfil" element={<Perfil />} /> */}
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;
