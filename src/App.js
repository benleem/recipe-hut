import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget';
import Header from './components/Header'
import Home from './pages/Home'
import Edit from './pages/Edit'


const App = () =>{
    const [user, setUser] = useState(null);
    
    useEffect(() =>{
        netlifyIdentity.on('login', user => setUser(user));
        netlifyIdentity.on('logout', () => setUser(null));
        setUser(netlifyIdentity.currentUser());
    },[user]);

    return(
        <div className="App">
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/edit" exact>
                            <Edit user={user}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;