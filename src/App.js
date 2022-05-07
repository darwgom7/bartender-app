import './App.css';
import BartenderComponent from './components/BartenderTableComponent';
import BartenderFormComponent from './components/BartenderFormComponent';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
          <div className='container'>
              <h3 className=" text-center text-white">BartenderApp</h3>
          </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
              <BartenderComponent />
          </div>
          <div className="col">
              <BartenderFormComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
