/* eslint-disable */

import { useState } from 'react';
import './App.css';


function App() {

  let hello = 'blog test';
  let [글제목, b] = useState(['미금역 삼겹살', '짐싸 어플', '세탁기 청소', '에어컨 청소']);
  let [좋아요, 좋아요변경] = useState(0);
  let [청소, 청소변경] = useState('변경 부분');

  function 함수() {
    return 좋아요변경(좋아요++);
  }

  function 청소함수() {
    return 청소변경(글제목[3]);
  }

  return (
    <div className="App">
      <div className="black_nav">
        <h1>ReactBlog</h1>
      </div>
      <h3 style={{color:'blue'}}>{hello}</h3>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ 함수 }>👍🏼</span> {좋아요} </h4>
        <p>5월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>5월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ 청소 } <button onClick={ 청소함수 }>변경</button></h4>
        <p>5월 18일 발행</p>
      </div>
    </div>
  );
}

export default App;
