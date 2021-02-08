
import './App.css';
import Profile from './profile/Profile';

function App() {
  const styleImg ={width:'500px', padding:'20px'}




  return (
    <div className="App">
      <span className="welcome">Hello to my Project Props</span>
    <br/>
      <header className="App-header" >
        
       <Profile fullName="Zakir Naik" bio="
        October 18, 1965 in Bombay, India" profession="propagandist of Islam">
      
       <img src="2210.jpg" alt="photo" style={styleImg}/></Profile>
     
       </header>

     
    </div>
  );
}

export default App;
