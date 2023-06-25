import './App.css';
import {
  BrowserRouter as Router, Routes,
  Route
} from 'react-router-dom';
import Registration from './components/user/Registration';
import Login from './components/user/Login';
import AddItem from './components/item/AddItem';
import Items from './components/item/Items';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add_item" element={<AddItem />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
