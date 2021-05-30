import HomePage from './pages/homePage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ChronometerPage from './pages/chronometerPage'
import CountdownPage from './pages/countdownPage'
import SignUp from './pages/createAccountPage'
import LoginPage from './pages/loginPage'

function App() {
  document.body.style.backgroundColor = "rgb(208, 208, 223)";
  return (
    
      <Router>  
          <div>
              {/* <Header/> */}
                <Switch>
                   <Route path="/countdown"><CountdownPage/></Route>

                    <Route path="/chronometer"><ChronometerPage/></Route>
						
			              <Route path="/signup"><SignUp/></Route>

                     <Route path="/login"> <LoginPage/> </Route>

                     <Route path="/"><HomePage/></Route>

                </Switch>
              {/* <Footer /> */}
            </div>
        </Router>
  );
}

export default App;
