
import './App.css';
import Counter from './components/Counter.jsx';
import Navigation from './components/Navigation.jsx';
import Users from './components/Users.jsx';

function App() {
  return (
   <>
  <div className="container">
    <Navigation/>
    <Counter/>
    <Users/>

  </div>
   </>
  );
}

export default App;
