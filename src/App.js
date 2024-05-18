import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes'
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
    </BrowserRouter>
  )
}

export default App;