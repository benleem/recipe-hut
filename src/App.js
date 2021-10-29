import Header from './components/Header'
import Home from './pages/Home'
import Edit from './pages/Edit'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Home}exact/>
                    <Route path="/edit" component={Edit}/>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;