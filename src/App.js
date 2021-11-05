import { useState, useEffect } from "react";
import axios from "axios";
import {
    Switch,
    Route
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
            const response = await axios.get('/.netlify/functions/display-posts');
            var postInfo = await response.data.data;
            setPost(postInfo);
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
        <div className='App'>
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
    )
}

export default App;