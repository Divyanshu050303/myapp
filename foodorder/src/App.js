import './App.css';
import Header from './component/layout/Header';
import Meals from './component/meals/Meals';
function App() {
  return (
    <div className="App">
       <Header/>
       <main>
        <Meals/>
       </main>

    </div>
  );
}

export default App;
