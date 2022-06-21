import './App.css';
import {useState} from 'react';

function App() {
  // const siteName="react app : first day"
  const siteName="방명록"
  const [state,setState]=useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    // const user_name = document.querySelector("#user_name").value;

    // let nameBox = document.querySelector("#user_name");
    // let userName = nameBox.value;
    // if(userName !== "") {
    //   alert(`${userName}님, 안녕하세요!`);
    //   nameBox.value = '';
    // }else {
    //   alert("이름을 입력하세요!")
    //   nameBox.focus();
    // }
    // console('hello!')

    // setName('홍길동');

    checkForm();
  }
  const clearInput = () => {
    let inputBox = document.querySelector("#user_name");
    inputBox.value='';
  }
  const checkForm = () => {
    let inputBox = document.querySelector("#user_name");
    let userName = inputBox.value;
    if(userName !== "") {
      // state값을 변경
      // setName(name.push(userName));
      setState([
        ...state, // 구조 분해 할당(de-structuring), [] 배열의 껍데기를 벗겨냄
        userName
      ]);
      // console.log(state);
      clearInput();
    }else{
      alert("성함을 입력한 뒤 버튼을 눌러주세요");
      inputBox.focus();
    }
  }

  // const renderState = state.forEach()
  const renderState = state.map((v,i) => { //v=value , i=index
    return (
      <li key={i}>{v}</li>
    )
  })
  
  return (
    <div className="App">
      <header className="my_app_header">
        <h1>{siteName}</h1>
        {/* <div className='breadcrumb' id='loc'>
          <a href="/" className='upper'>home</a>
          <button onClick={()=>{alert('hello!')}}>Click!</button>
          <button onMouseEnter={handleClick}>Click!</button>
          <button onClick={handleClick}>Click!</button>
        </div> */}
      </header>
      <section>
        <div className="wrap" style={{background: 'darkgray', color:'red'}}>
          <p>교육에 참여해주신 분들의 이름을 적어주세요.</p>
          <form onSubmit={handleClick} autoComplete="off">
            <input type="text" id="user_name" placeholder="참석자의 이름을 입력하세요."/>
            {/* <button onClick={handleClick}>등록</button> */}
            <button>등록</button>
          </form>
        </div>
      </section>
      <section>
        <div className="list">
          <h2>참석자 명단</h2>
          <hr />
          {/* {state} */}
          <ul>{renderState}</ul>
        </div>
      </section>
    </div>
  );
}

export default App;
