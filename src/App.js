import './App.css';

//Routing
import { BrowserRouter} from "react-router-dom";

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';
//import Login from './Pages/LogIn';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          <Footer/>
      
        </div>
    </BrowserRouter>
  );
}

export default App;
