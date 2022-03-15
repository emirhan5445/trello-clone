import './SideBar.css';
import Board from './Board';
import { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { selectUserName } from '../features/userSlice';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';

function SideBar() {
    const { setIsTrue, letter } = useContext(AppContext);

    const userName = useSelector(selectUserName);
    console.log(letter);
    return (
        <>
            <div className="left-content">
                <div className="account">
                    <ul>
                        <Link to='/LogIn'>
                            <li className='li-settings'>
                                <span id='account-text'>
                                        <Avatar variant="rounded" sx={{ bgcolor: deepOrange[500] }}>{
                                            letter !== null ?
                                            <div>{letter}</div> :
                                            null
                                        }</Avatar>{
                                    (userName.userName === undefined) ?
                                        <div id='account-text-div'>Untitled</div> :
                                    <div className='account-text-margin'>{userName.userName}</div>
                                }</span>
                            </li>
                        </Link>
                        <li onClick={() => setIsTrue(true)} className='li-settings'><i className="fa fa-angle-left"></i></li>
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