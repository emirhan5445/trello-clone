import './SideBar.css';
import Board from './Board';
import { useContext, useEffect } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { selectUserName, selectUserSurname } from '../features/userSlice';
import { useSelector } from 'react-redux';
/* import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors'; */
import { Link } from 'react-router-dom';

function SideBar() {
    const userName = useSelector(selectUserName);
    const userSurname = useSelector(selectUserSurname);
    
    const { setIsTrue } = useContext(AppContext); 

    return (
    <>   
        <div className="left-content">
            <div className="account">
                <ul>
                
                {/* <li className='li-settings'><Avatar sx={{ width: 30, height: 30, bgcolor: deepOrange[500] }} variant="rounded"></Avatar><span id='account-text'>Deneme</span></li> */}
                <Link to='/LogIn'><li className='li-settings'><i className="fa fa-solid fa-user-plus"></i><span id='account-text'>{userName}</span></li></Link>
                    <li onClick={() => setIsTrue(true)} className='li-settings'><i className="fa fa-angle-left"></i> </li>
                </ul>
                
            </div>
            <div className="actions">
                <ul>
                    <li className='li-settings'><i className="fa-brands fa-trello"></i><span className='board-text' id='actions-text'>Boards</span></li>
                    <li className='li-settings'><i className="fa-solid fa-user-tie"></i><span id='actions-text'>Members</span></li>
                    <li className='li-settings'><i className="fa-solid fa-gear"></i><span id='actions-text'>Settings</span></li>
                </ul>
            </div>
            <div className="workspace-views">
                <h2>Workspace views</h2>
                <ul>
                    <li><i className="fa-solid fa-table-list"></i><span id='workspace-text'>Table</span></li>
                    <li><i className="fa-solid fa-calendar-days"></i><span id='workspace-text'>Calendar</span></li>
                </ul>
            </div>
            <div className="your-boards">
                <h2>Your boards<span><i className="fa-solid fa-plus"></i></span></h2>
                <Board /> {/* bootstrap color picker  */}   
            </div>
        </div>
    </>
  );
}

export default SideBar;