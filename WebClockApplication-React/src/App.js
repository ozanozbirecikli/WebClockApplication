import HomePage from './components/homePage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ChronometerPage from './components/chronometerPage'
import CountdownPage from './components/countdownPage'
import SignUp from './components/createAccountPage'
import LoginPage from './components/loginPage'

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
              
            </div>
        </Router>
  );
}

export default App;
