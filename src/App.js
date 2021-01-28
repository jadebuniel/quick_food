import {Switch, Route} from 'react-router-dom'
import Details from './pages/Details';
import Home from "./pages/Home";
import Order from './pages/Order';
import Restaurants from './pages/Restaurants';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/restaurants' component={Restaurants} />
        <Route path='/details' component={Details} />
        <Route path='/order' component={Order} />
        <Route component={Home} />
      </Switch>  
    </div>
  );
}

export default App;
