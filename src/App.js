import Navbar from './Navbar'; // Importing Navbar component in App.js
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';

function App() {

  // const title = "Welcome to React bro....";
  // const likes = 50;
  // const link = "http://www.google.com";
  // const person = {name:"yash",age:20};
  //You can display strings, number but not the objects and booleans

  return (
    <Router>
    <div className="App">
      <Navbar/>                        {/*Calling Navabr component*/}
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
        {/* <h1>App Component</h1>
        <h2>{title}</h2>
        <p>Liked {likes} times</p>
        <p>{person}</p> 
        Printing random values using javascript
        <p>{99}</p>
        <p>{"Vasudhaiv Kutumbakam"}</p>
        <p>{[1,2,3,4,5,6]}</p>
        <p>{Math.random()*20}</p>
        <a href={link}>Google Website</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
