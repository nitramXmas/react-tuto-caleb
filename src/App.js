import './App.css';
import Golfcourse from './components/Golfcourse';

function App() {
  const showGolfcourses = true;
  return (
    <div className="App">
      {showGolfcourses ? (
        <>
          <Golfcourse />
          <Golfcourse />
          <Golfcourse />
          <Golfcourse />
          <Golfcourse />
        </>
      ) : (
        <p> You cannot see golf courses </p>
      )}
    </div>
  );
}

export default App;
