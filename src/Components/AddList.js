import './AddList.css';
import ListActions from './ListActions';

function AddList({ setClicked }) {
  return (
    <>
      <div onClick={() => setClicked(checkEvent => !checkEvent)} className="add-list">
        <span><i className="fa-solid fa-plus"></i><span>Add a list</span></span>
      </div>
    </>
  );
}

export default AddList;