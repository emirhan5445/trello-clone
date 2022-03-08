import './NavBar.css';

function NavBar() {
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
                <li><i className="fa fa-solid fa-user-plus"></i></li>
            </ul>  
        </div>
    </>
  );
}

export default NavBar;