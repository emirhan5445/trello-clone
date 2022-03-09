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
            <li><BarChartOutlinedIcon /></li>
            <li>Untitled</li>
            <li><i class="fa-regular fa-star"></i></li>
            <li>Name</li>
            <li><LockIcon /></li>
            <li><AccountCircleOutlinedIcon /></li>
            <li><PersonAddAltOutlinedIcon /></li>
          </ul>
            
          <ul className='right-list'>
            <li><i class="fa-solid fa-rocket"></i></li>
            <li><ElectricBoltIcon /></li>
            <li><FilterListIcon /></li>
            <li><i class="fa-solid fa-ellipsis"></i></li>
          </ul>
        </div>
    </>
  );
}

export default ContentNav;