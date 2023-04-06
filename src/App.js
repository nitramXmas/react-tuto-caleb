import './App.css';
import Golfcourse from './components/Golfcourse';
import { useState } from 'react';

function App() {
  const [par, setPar] = useState('72');
  const showGolfcourses = true;
  return (
    <div className="App">
      {showGolfcourses ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setPar(e.target.value);
            }}
          />
          <Golfcourse name="Golf Club de Perigueux" par="72" />
          <Golfcourse name="Golf de la Marterie" par={par} />
          <Golfcourse name="Epherra" />
        </>
      ) : (
        <p> You cannot see golf courses </p>
      )}
    </div>
  );
}

export default App;
