import './LogInPage.css';
import { useDispatch } from 'react-redux';
import { setName, setSurname } from '../features/userSlice';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserSurname } from '../features/userSlice';

function LogInPage() {
    const userName = useSelector(selectUserName);

    const dispatch = useDispatch();

    /* const handleFormSubmit = e => {
        e.preventDefault();
        
    } */

    

    

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
                    <div /* onClick={() => handleFormSubmit()} */ /* href="#!" */> 
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