import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './router'
import NavBar from './component/NavBar'
function App() {
  return (
    <div className="App">
    	<Router>
    		<NavBar />
    		<Routes></Routes>
    	</Router>
    </div>
  );
}

export default App;
