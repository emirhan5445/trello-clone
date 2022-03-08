import './SideBar.css';
import Board from './Board';

function SideBar() {
  return (
    <>   
        <div className="left-content">
            <div className="account">
                <ul>
                    <li className='li-settings'><i className="fa fa-solid fa-user-plus"></i><span id='account-text'>Deneme</span></li>
                    <li className='li-settings'><i className="fa fa-angle-left"></i> </li>
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
                <h2>Your boards<span><i class="fa-solid fa-plus"></i></span></h2>
                <Board />
                <Board />
                
            </div>
            <div className="premium">
                    <button className='premium-btn'>
                        <i class="fa-solid fa-suitcase"></i><span>Try Premium free</span>    
                    </button>
                   
            </div>
        </div>
    </>
  );
}

export default SideBar;