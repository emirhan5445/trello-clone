import './Boards.css';

function Board({ id, board }) {
  return (
    <>
        <ul className='board-ul'>
            <li><i className="fa-solid fa-square"></i><span id='name-text'>List name</span></li>
            <li><i className="fa-solid fa-square"></i><span id='name-text'>List name</span></li>
        </ul>
    </>
  );
}

export default Board;