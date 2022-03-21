import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" element={<HelloWorld/>} exact={true}/>
                  <Route path="/" element={<Labs/>}/>
                  <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                  <Route path="/tuiter/home" element={<HomeScreen/>}/>
                  <Route path="/tuiter" element={<HomeScreen/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
