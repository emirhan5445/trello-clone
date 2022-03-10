import './ContentNav.css';
import LockIcon from '@mui/icons-material/Lock';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AddList from '../Components/AddList';
import { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';

/* import { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';   */

function ContentNav() {
  const { isTrue } = useContext(AppContext);  

  return (
    <>
    {
      isTrue ?
      
        <div className='right-content' style={{ width: '100vw', height: '93vh' }} id='width'>
          <ul className='left-list'>
            <li><span><BarChartOutlinedIcon /> Board <i className="fa fa-angle-down board-angle"></i> </span></li>
            <li><span>Untitled</span></li>
            <li><span><i className="fa-regular fa-star"></i></span></li>
            <li className='cizgi'></li>
            <li><span>Name</span></li>
            <li className='cizgi'></li>
            <li><span><LockIcon /> Workspace visible</span></li>
            <li className='cizgi'></li>
            <li><span><AccountCircleOutlinedIcon /></span></li>
            <li><span><i className="fa-solid fa-user-plus"></i> Invite</span></li>
          </ul>

          <ul className='right-list'>
            <li><span><i className="fa-solid fa-rocket"></i> Power-ups</span></li>
            <li><span><ElectricBoltIcon /> Automation</span></li>
            <li className='cizgi'></li>
            <li><span><FilterListIcon /> Filter</span></li>
            <li><span><i className="fa-solid fa-ellipsis"></i> Show menu</span></li>
          </ul>
        </div> :
        <div className='right-content' style={{ width: '82vw', height: '93vh' }} id='width'>
        <ul className='left-list'>
          <li><span><BarChartOutlinedIcon /> Board <i className="fa fa-angle-down board-angle"></i> </span></li>
          <li><span>Untitled</span></li>
          <li><span><i className="fa-regular fa-star"></i></span></li>
          <li className='cizgi'></li>
          <li><span>Name</span></li>
          <li className='cizgi'></li>
          <li><span><LockIcon /> Workspace visible</span></li>
          <li className='cizgi'></li>
          <li><span><AccountCircleOutlinedIcon /></span></li>
          <li><span><i className="fa-solid fa-user-plus"></i> Invite</span></li>
        </ul>

        <ul className='right-list'>
          <li><span><i className="fa-solid fa-rocket"></i> Power-ups</span></li>
          <li><span><ElectricBoltIcon /> Automation</span></li>
          <li className='cizgi'></li>
          <li><span><FilterListIcon /> Filter</span></li>
          <li><span><i className="fa-solid fa-ellipsis"></i> Show menu</span></li>
        </ul>
      </div>
    }

    </>
  );
}

export default ContentNav;