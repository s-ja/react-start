// import logo from './logo.svg';
import './App.css';
import './Rwd.css';

import { useState } from 'react';

import Header from './component/Header';
import Greeting from './component/Greeting';

import Calc from './component/Calc';

function App() {
  // 리액트 뷰 앵귤러에서 var는 사용하지 않도록.
  const title = "front_end_trial";
  const hello  = () => {alert('hello')}
  // let counts = 0;

  const [count, setCount] = useState(0);
  const [name, setName] = useState('이름');
  const countPlus = () => {
    setCount(count+1) // count++ vs ++count (?)
    // console.log(count);
    alert(`${name}님, 안녕하세요.`)
  }

  // function changeName(e){
  //   console.log(e); // e: event의 축약, event 객체를 뜻함.
  //   setName(e.target.value);
  // }

  return (
    <div className="App">
      <Header title={title} hello={hello}/>
      <Greeting />
      <div className='Count flex'>
        <p>count : {count}</p>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='사용자이름'/>
        <button onClick={countPlus} >count up + </button>
      </div>

      <Calc />
      <p className='copy'> &copy;ASJ</p>
    </div>
  );
}

export default App;
