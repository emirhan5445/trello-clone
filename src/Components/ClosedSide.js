import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./ClosedSide.css";
import { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';

function ClosedSide() {
  const { setIsTrue, isTrue } = useContext(AppContext);
  console.log(isTrue);
  return (
    <>
      <div /* onClick={
        isTrue ?
        setIsTrue(false) :
        null
      } */ className="closed-side">
        <ChevronRightIcon sx={{ position: 'absolute', top: "10px", left:"3px", bgcolor: '#3887B4', borderRadius: "50px", cursor: "pointer", border: "1px solid rgba(175, 175, 175,0.6)", fontSize:"25px" , padding:"3px"}} />

      </div>

    </>
  );
}

export default ClosedSide;