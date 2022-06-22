// import logo from './logo.svg';
import './App.css';
import './Rwd.css';

import Header from './component/Header';
import Greeting from './component/Greeting';

function App() {
  // 리액트 뷰 앵귤러에서 var는 사용하지 않도록.
  const title = "front_end_trial";
  const hello  = () => {alert('hello')}

  return (
    <div className="App">
      <Header title={title} hello={hello}/>
      <Greeting />
    </div>
  );
}

export default App;
