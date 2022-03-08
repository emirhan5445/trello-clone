import './SideBar.css';

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
                    <li className='li-settings'><i className="fa-brands fa-trello"></i><span id='account-text'>Boards</span></li>
                    <li className='li-settings'><i class="fa-solid fa-user-tie"></i><span id='account-text'>Members</span></li>
                    <li className='li-settings'><i class="fa-solid fa-gear"></i><span id='account-text'>Settings</span></li>
                </ul>
            </div>
            <div className="workspace-views">
                <h2>Workspace views</h2>
                <ul>
                    <li><i class="fa-solid fa-table-list"></i><span id='account-text'>Table</span></li>
                    <li><i class="fa-solid fa-calendar-days"></i><span id='account-text'>Calendar</span></li>
                </ul>
            </div>
            <div className="your-boards">
                <h2>Your boards</h2>
                <ul>
                    <li><i class="fa-solid fa-square"></i><span id='account-text'>List name</span></li>

                </ul>
            </div>
            <div className="premium"></div>
        </div>
    </>
  );
}

export default SideBar;