import './LogInPage.css';
import { useDispatch } from 'react-redux';
import { setName, setSurname } from '../features/userSlice';
import { Link } from "react-router-dom";

function LogInPage() {
    const dispatch = useDispatch();    

    return (
        <>
            <div className="login-box">
                <h2>Log-In</h2>
                <form>
                    <div className="user-box">
                        <input onChange={e => dispatch(setName({
                            userName: e.target.value
                        }))} type="text" name="" required="" />
                        <label>First Name</label>
                    </div>
                    <div className="user-box">
                        <input onChange={e => dispatch(setSurname({
                            userSurname: e.target.value
                        }))} type="text" name="" required="" />
                        <label>Last Name</label>
                    </div>
                    <div> 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <Link to='/'>
                        Submit</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LogInPage;