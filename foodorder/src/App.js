import './App.css';
import Header from './component/layout/Header';
import meals from './component/meals/meals';
function App() {
  return (
    <div className="App">
       <Header/>
       <main>
        <meals/>
       </main>

    </div>
  );
}

export default App;
