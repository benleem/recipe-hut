import { useState, useEffect } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget';
import Header from './components/Header'
import Home from './pages/Home'
import Edit from './pages/Edit'

const App = () =>{
    const [user, setUser] = useState(null);
    const [posts, setPost] = useState([]);

    const fetchData = async () => {
        try {
            console.log("Loading...")
            const response = await axios.get('/.netlify/functions/display-posts');
            var postInfo = await response.data.data;
            setPost(postInfo);
            console.log("Data received");
        } catch (err) {
            console.error(err);
        }
    }
    
    useEffect(() =>{
        netlifyIdentity.on('login', user => setUser(user));
        netlifyIdentity.on('logout', () => setUser(null));
        setUser(netlifyIdentity.currentUser());
    },[user]);

    useEffect(() => {
        fetchData();
    },[])

    return(
        <div className="App">
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact>
                            <Home posts={posts} user={user}/>
                        </Route>
                        <Route path="/edit" exact>
                            <Edit fetchData={fetchData} posts={posts} user={user}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;