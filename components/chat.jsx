import {React,useState,useEffect,useRef} from 'react'
import user from '../public/user.png'

function Chat() {
    const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>The Kiet<br/><span>Website Designer</span></h3>
          <ul>
          <DropdownItem img = {user} text = {"My Profile"}/>
            <DropdownItem img = {user} text = {"Edit Profile"}/>
            <DropdownItem img = {user} text = {"Inbox"}/>
            <DropdownItem img = {user} text = {"Settings"}/>
            <DropdownItem img = {user} text = {"Helps"}/>
            <DropdownItem img = {user} text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
  )
}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }

export default Chat