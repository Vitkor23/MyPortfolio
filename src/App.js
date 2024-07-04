import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/header/Header';
import { ThemeProvider } from './contex/ThemeContext';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Header/>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
     </Router>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
