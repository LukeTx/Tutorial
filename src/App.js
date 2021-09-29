import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

  //const title = 'Welcome to the new blog';
  const likes =50;

  const link ="https://youtube.com"

  //switch component make sure only 1 route show at any 1 time
  //Route path is the path after the url


  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>   
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/id:">
            <BlogDetails />
          </Route>



        </Switch>
 
      </div>
      
    </div>
    </Router>
  );
}

export default App;  //always export component