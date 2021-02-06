
import './App.css';
import Profile from './profile/Profile';

function App() {
  const styleImg ={width:'200px'}


  const handleClick=e=>{
    e.preventDefault();
    alert("hello"); };


  return (
    <div className="App">
      <span className="welcome">Hello to my Project Props</span>
    <br/>
      <header className="App-header" >
        
       <Profile fullName="Bilel Marrouchi" bio="111" profession="teacher" handleClick={handleClick}><br/>
      
       <img src="react.png" alt="photo" style={styleImg}/></Profile>
     
       </header>

     
    </div>
  );
}

export default App;
