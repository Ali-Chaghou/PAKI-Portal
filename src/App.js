import './App.css';

//Routing
import { BrowserRouter} from "react-router-dom";

//Components
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
        <div className="App">

          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
