import "./App.css";
import Index from './Pages/index.js';
import Insertar from './Pages/Insertar';
import Photos from "./Pages/photos";

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
                    <Route path = "/insert" exact>
                        <Insertar />
                    </Route>
                    <Route path = "/photos" exact>
                        <Photos />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;