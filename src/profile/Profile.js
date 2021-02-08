import React from "react" ;
import PropTypes from 'prop-types';
import '../App.css' ;
const Profile =(props)=> {
    
    const style ={color:'white' , 
      fontSize:'30px', 
     border:'2px solid white' , width:'300px', 
    paddingBbottom:'30px',
    textAlign:'center' ,  height:'200px' }
    const style2 ={ fontSize:25 , backgroundColor: 'white' , padding:5 

    }
    
 function handleClick (){
   // e.preventDefault();
    alert(`hello ${props.fullName} to web site`) }


 return (
     <>
    <div className="object">
     <span style={style}><span style={{ backgroundColor: 'white' , padding:15 , color:'black'}}>
         THE FULL NAME </span>
      <br/> <br/>{props.fullName}</span>


      
     <span style={style}> <span style={{ backgroundColor: 'white' , padding:15, color:'black' }}>THE BIO IS </span>
      <br/><br/>{props.bio}</span>
     <span style={style}><span style={{ backgroundColor: 'white' , padding:15, color:'black' }}>THE PROFESSION IS
      </span> <br/><br/>{props.profession}</span>
     </div>
     <div className="object2">
     <span > <span style={style2}>THIS IS PROFILE PICTURE</span>  <br/> {props.children}</span>
<br/>
<button className="img" onClick={handleClick} >Click Me</button>
</div>
     </>
 
 )



}
Profile.defaultProps ={fullName :"user name" , bio:"user bio" , profession:"user profession" };

Profile.propTypes ={
fullName:PropTypes.string ,
bio:PropTypes.number,
};


export default Profile ;