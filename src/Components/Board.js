import { useDispatch } from 'react-redux';
import './Board.css';
import { setBoardInfo } from '../features/appSlice';

function Board({ id, boardName }) {
  const dispatch = useDispatch();

  return (
    <>
        <ul className='board-ul' onClick={() => {
          dispatch(setBoardInfo({
            boardId: id,
            boardName: boardName
          }))
        }}>
            <li><i className="fa-solid fa-square"></i><span id='name-text'>{boardName}</span></li>
        </ul>
    </>
  );
}

export default Board;