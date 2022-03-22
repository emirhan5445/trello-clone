import './ListActions.css';


function ListActions({ boardId, input, setInput, setClicked }) {
  

  return (
    <>
      <div className='list-actions'>
          <input 
            disabled={!boardId}
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text" 
            placeholder='Enter list title...'
          />
          <span>
            <button onClick={() => setClicked(checkEvent => !checkEvent)} disabled={!boardId}>Add list</button>
            <i className="fa-solid fa-xmark"></i>
          </span>
      </div>
    </>
  );
}

export default ListActions;