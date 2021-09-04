import "./App.css";
import Index from './Pages/index.js';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className = "container">
                <Switch>
                    <Route path = "/" exact>
                        <Index />
                    </Route>
                    <Route path = "/hola" exact>
                        <h1>Hola</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;