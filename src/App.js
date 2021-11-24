import { useState, useEffect } from "react";
import axios from "axios";
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget';
import Header from './components/Header';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Landing from "./pages/Landing";

const App = () =>{
    const [user, setUser] = useState(null);
    const [posts, setPost] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/.netlify/functions/display');
            var postInfo = await response.data.data;
            setPost(postInfo);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    useEffect(() =>{
        setUser(netlifyIdentity.currentUser());
    },[user]);

    useEffect(() => {
        netlifyIdentity.on('login', user => setUser(user));
        netlifyIdentity.on('logout', () => setUser(null));
        fetchData();
    },[]);

    return(
        <div className='App'>
            <Header setSearch={setSearch} posts={posts} location={location}/>
            <Switch>
                <Route path="/" exact>
                    <Landing/>
                </Route>
                <Route path="/home" exact>
                    <Home search={search} loading={loading} posts={posts} user={user}/>
                </Route>
                <Route path="/edit" exact>
                    <Edit search={search} loading={loading} fetchData={fetchData} posts={posts} user={user}/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;