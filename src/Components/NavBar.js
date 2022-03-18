import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import './NavBar.css';
import { AppContext } from '../Contexts/AppContext';
import { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { selectUserName, selectUserSurname } from '../features/userSlice';

function NavBar() {
  const { letter, surnameLetter } = useContext(AppContext);
  
  console.log(surnameLetter);

  return (
    <>
        <div className="nav-bar">
            <ul className="nav-bar-left">
                <li><i className="fa fa-grip-horizontal"></i></li>
                <li id='logo'><i className="fa-brands fa-trello"></i>Trello</li>
                <li><a href="#!">Workspaces <i className="fa fa-angle-down"></i></a></li>
                <li><a href="#!">Recent <i className="fa fa-angle-down"></i></a></li>
                <li><a href="#!">Starred <i className="fa fa-angle-down"></i></a></li>
                <li><a href="#!">Templates <i className="fa fa-angle-down"></i></a></li>
                <li><a href="#!">Create</a></li>
            </ul>
            <ul className="nav-bar-right">
                <li><input className='search-form' type="text" placeholder="&#61442; Search..."/></li>
                <li><i className="fa fa-info-circle"></i></li>
                <li><i className="fa fa-solid fa-bell"></i></li>
                <Avatar sx={{ width: 35, height: 35, bgcolor: deepOrange[500], marginRight: "12px" }}>{
                  letter !== null && surnameLetter !== null /* && window.location.href === 'http://localhost:3000/' */  ?
                  letter + surnameLetter :
                  null   
                }</Avatar>    
            </ul>  
        </div>
    </>
  );
}

export default NavBar;