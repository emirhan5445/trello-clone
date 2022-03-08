import './ContentNav.css';

function ContentNav() {
  return (
    <>
        <div className='right-content'>
          <ul className='left-list'>
            <li><i class="fa-solid fa-chart-simple"></i></li>
            <li></li>
            <li><i class="fa-regular fa-star"></i></li>
            <li></li>
            <li><i class="fa-solid fa-lock-keyhole"></i></li>
            <li></li>
            <li></li>
          </ul>
            
          <ul className='right-list'>
            <li><i class="fa-solid fa-rocket"></i></li>
            <li><i class="fa-solid fa-bolt-lightning"></i></li>
            <li><i class="fa-solid fa-bars-filter"></i></li>
            <li><i class="fa-solid fa-ellipsis"></i></li>
          </ul>
        </div>
    </>
  );
}

export default ContentNav;