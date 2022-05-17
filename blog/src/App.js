import './App.css';

function App() {

  var hello = 'blog test';

  return (
    <div className="App">
      <div className="black_nav">
        <h1>Blog</h1>
      </div>
      <h3 style={{color:'blue'}}>{hello}</h3>
    </div>
  );
}

export default App;
