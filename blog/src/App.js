import './App.css';

function App() {
  const posts = [
    {id:0, title : 'react js 1st day',wr_date: new Date('2022-06-21').toString()},
    {id:1, title : 'firebase 입문',wr_date: new Date('2022-06-30').toString()},
    {id:2, title : 'HTML/CSS web_design',wr_date: new Date('2022.06-01').toString()},
    {id:3, title : 'adobe photoshop / illust cs6',wr_date: new Date('2022.06-01').toString()},
    {id:4, title : 'clip studio paint',wr_date: new Date('2022.06-01').toString()},
  ]

  const renderPosts = posts.map((v,i) =>{
    return (
      <div className='rows' key={v.id}>
        <div className='row'>{v.title} <span className='date'>{v.wr_date}</span></div>
      </div>
    )
  })
  
  return (
    <div className="App">
      <header>
        <h1>front-end Designer</h1>
        </header>
     <section>
      <ul>
        {/* {posts} */}
        {renderPosts}
      </ul>
     </section>
    </div>
  );
}

export default App;
