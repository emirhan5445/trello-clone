import './ListActions.css';


function ListActions() {
  return (
    <>
      <div className='list-actions'>
          <input type="text" placeholder='Enter list title...'/>
          <span>
            <button>Add list</button>
            <i class="fa-solid fa-xmark"></i>
          </span>
      </div>
    </>
  );
}

export default ListActions;