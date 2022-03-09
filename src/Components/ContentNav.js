import './ContentNav.css';
import LockIcon from '@mui/icons-material/Lock';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

function ContentNav() {
  return (
    <>
        <div className='right-content'>
          <ul className='left-list'>
            <li><span><BarChartOutlinedIcon /> Board</span></li>
            <li><span>Untitled</span></li>
            <li><span><i class="fa-regular fa-star"></i></span></li>
            <li><span>Name</span></li>
            <li><span><LockIcon /> Workspace visible</span></li>
            <li><span><AccountCircleOutlinedIcon /></span></li>
            <li><span><PersonAddAltOutlinedIcon /> Invite</span></li>
          </ul>
            
          <ul className='right-list'>
            <li><span><i class="fa-solid fa-rocket"></i> Power-ups</span></li>
            <li><span><ElectricBoltIcon /> Automation</span></li>
            <li><span><FilterListIcon /> Filter</span></li>
            <li><span><i class="fa-solid fa-ellipsis"></i> Show menu</span></li>
          </ul>
        </div>
    </>
  );
}

export default ContentNav;