import './Boards.css';

function Board({ boardName }) {
  return (
    <>
        <ul className='board-ul'>
            <li><i className="fa-solid fa-square"></i><span id='name-text'>{boardName}</span></li>
        </ul>
    </>
  );
}

export default Board;