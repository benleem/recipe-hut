import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Edit from './pages/Edit'

const App = () =>{
    return(
        <div className="App">
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact>
                            <Home prop='test'/>
                        </Route>
                        <Route path="/edit" exact>
                            <Edit/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;