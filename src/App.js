import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreComponent";
import Tuiter from "./components/tuiter"
import ProfileScreen from "./components/tuiter/ProfileScreen";
import ProfileEdit from "./components/tuiter/ProfileScreen/profile-edit";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path='/'>
                      <Route index
                             element={<Labs/>}/>
                      <Route path='hello'
                             element={<HelloWorld/>}/>
                      <Route path='tuiter'
                            element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path='home'
                                 element={<HomeScreen/>}/>
                          <Route path='explore'
                                 element={<ExploreScreen/>}/>
                          <Route path='profile'
                                 element={<ProfileScreen/>}/>
                          <Route path='profile/edit'
                                 element={<ProfileEdit/>}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;