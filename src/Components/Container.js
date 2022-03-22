import SideBar from "./SideBar";
import ContentNav from "./ContentNav";
import '../Components/Container.css';
import { useSelector } from "react-redux";
import { selectBoardName } from '../features/appSlice';

function Container() {
  const boardName = useSelector(selectBoardName);

  return (
    <>
        <div className="wrapped">
            <SideBar />
            <div id="width">
                <ContentNav boardName={boardName} />
            </div>
        </div>
    </>
  );
}

export default Container;