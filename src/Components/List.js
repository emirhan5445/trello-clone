import './List.css';

function List({ input, clicked }) {
  return (
    <>
        <div>{input !== '' && clicked === false ? input : null}</div>
    </>
  );
}

export default List;