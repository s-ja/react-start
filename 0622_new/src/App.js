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
      <p style={{fontSize:'10pt'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Libero id faucibus nisl tincidunt eget nullam non nisi. Sagittis orci a scelerisque purus semper eget. Turpis in eu mi bibendum neque egestas. Sed id semper risus in hendrerit gravida rutrum. Nunc mattis enim ut tellus elementum. Habitant morbi tristique senectus et netus et malesuada fames ac. Potenti nullam ac tortor vitae. Id ornare arcu odio ut sem nulla. Tristique senectus et netus et malesuada fames ac. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Aenean vel elit scelerisque mauris pellentesque. Sed blandit libero volutpat sed cras ornare. Eu lobortis elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit amet luctus venenatis lectus.
          Eu augue ut lectus arcu bibendum at varius vel. Lacus viverra vitae congue eu consequat ac. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Orci ac auctor augue mauris augue neque gravida. Cursus risus at ultrices mi. Sit amet volutpat consequat mauris nunc congue. Faucibus vitae aliquet nec ullamcorper sit amet risus. Quam elementum pulvinar etiam non. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sed vulputate mi sit amet mauris commodo quis. Viverra nam libero justo laoreet sit amet. Volutpat odio facilisis mauris sit amet massa. Enim blandit volutpat maecenas volutpat blandit. Elit at imperdiet dui accumsan sit. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Augue ut lectus arcu bibendum at varius vel pharetra vel. Potenti nullam ac tortor vitae. Facilisis sed odio morbi quis commodo odio aenean sed. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
          Morbi non arcu risus quis. Aliquet enim tortor at auctor. Sed turpis tincidunt id aliquet risus feugiat in ante. Pharetra et ultrices neque ornare. Posuere lorem ipsum dolor sit amet. Ut faucibus pulvinar elementum integer. Mattis nunc sed blandit libero volutpat sed. Risus viverra adipiscing at in. Lectus vestibulum mattis ullamcorper velit sed. Ac tincidunt vitae semper quis lectus nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque. At risus viverra adipiscing at in tellus integer. Nulla posuere sollicitudin aliquam ultrices. Quisque non tellus orci ac auctor augue mauris. Dictum non consectetur a erat nam.
          Pharetra vel turpis nunc eget lorem dolor. Ultrices tincidunt arcu non sodales neque sodales. Enim nec dui nunc mattis enim ut tellus elementum. Vivamus at augue eget arcu dictum varius duis at consectetur. Feugiat vivamus at augue eget arcu dictum varius duis. Imperdiet dui accumsan sit amet nulla. Viverra adipiscing at in tellus. Nibh nisl condimentum id venenatis a condimentum. Ultrices eros in cursus turpis massa. Vitae et leo duis ut diam quam nulla. Rhoncus urna neque viverra justo nec ultrices dui sapien. Id eu nisl nunc mi ipsum faucibus. In aliquam sem fringilla ut morbi tincidunt augue interdum. Diam sit amet nisl suscipit adipiscing bibendum. Eget nullam non nisi est sit amet facilisis.
          Amet commodo nulla facilisi nullam vehicula ipsum a. Consequat semper viverra nam libero justo. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Feugiat sed lectus vestibulum mattis ullamcorper velit. In ante metus dictum at tempor commodo ullamcorper a lacus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Massa vitae tortor condimentum lacinia quis vel eros. Non pulvinar neque laoreet suspendisse interdum. Tristique senectus et netus et malesuada. Diam vulputate ut pharetra sit. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Ultrices vitae auctor eu augue. Ut eu sem integer vitae justo eget magna. Nec feugiat in fermentum posuere. Eget egestas purus viverra accumsan in nisl. Diam phasellus vestibulum lorem sed risus ultricies. Senectus et netus et malesuada fames ac turpis egestas sed. Pretium vulputate sapien nec sagittis aliquam malesuada. Consectetur a erat nam at lectus urna duis convallis. Quam nulla porttitor massa id neque.
        </p>
    </div>
  );
}

export default App;
