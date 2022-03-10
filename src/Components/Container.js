import SideBar from "./SideBar";
import ContentNav from "./ContentNav";
import '../Components/Container.css';

function Container() {
  return (
    <>
        <div className="wrapped">
            <SideBar />
            <div id="width">
                <ContentNav />
            </div>
        
        </div>
    </>
  );
}

export default Container;