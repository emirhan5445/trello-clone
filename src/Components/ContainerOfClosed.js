import ContentNav from "./ContentNav";
import ClosedSide from "./ClosedSide";
import '../Components/Container.css';

function Container() {
  return (
    <>
        <div className="wrapped">
            <ClosedSide />
            <div id="width">
                <ContentNav />
            </div>
        </div>
    </>
  );
}

export default Container;