import './App.css';
import NavBar from './components/NavBar' ;
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom' ;
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' exact component={Services}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/sing-up' exact component={SignUp}/>

        </Switch>
        
      </Router>
    
    </div>
  );
}

export default App;
