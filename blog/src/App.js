import { useState } from 'react';
import './App.css';

function App() {

  let hello = 'blog test';
  let [글제목, b] = useState(['미금역 삼겹살', '짐싸 어플', '세탁기 청소']);

  return (
    <div className="App">
      <div className="black_nav">
        <h1>ReactBlog</h1>
      </div>
      <h3 style={{color:'blue'}}>{hello}</h3>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>5월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>5월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>5월 18일 발행</p>
      </div>
    </div>
  );
}

export default App;
