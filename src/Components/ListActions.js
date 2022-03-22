import { useState } from 'react';
import './ListActions.css';


function ListActions({ boardId }) {
  const [input, setInput] = useState('');

  return (
    <>
      <div className='list-actions'>
          <input 
            disabled={!boardId}
            value={input}
            onClick={e => setInput(e.target.value)}
            type="text" 
            placeholder='Enter list title...'
          />
          <span>
            <button disabled={!boardId}>Add list</button>
            <i className="fa-solid fa-xmark"></i>
          </span>
      </div>
    </>
  );
}

export default ListActions;