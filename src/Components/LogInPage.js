import './LogInPage.css';
import { useDispatch } from 'react-redux';
import { setName, setSurname } from '../features/userSlice';
import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AppContext } from '../Contexts/AppContext';
import { useSelector } from 'react-redux';
import { selectUserName } from '../features/userSlice';

function LogInPage() {
    const dispatch = useDispatch();

    const userName = useSelector(selectUserName);
    
    const { getUppercase, getUppercaseSurname } = useContext(AppContext);

    useEffect(() => {
        (userName.userName === undefined) ? console.log() : getUppercase(userName.userName);
        // (userSurname.userSurname === undefined) ? console.log('hello') : getUppercaseSurname(userSurname.userSurname);
    }, [getUppercase, userName.userName /* userSurname.userSurname */, getUppercaseSurname]);

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