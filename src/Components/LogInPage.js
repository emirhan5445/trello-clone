import './LogInPage.css';

function LogInPage() {
    return (
        <>
            <div class="login-box">
                <h2>Log-In</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" />
                        <label>First Name</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="" required="" />
                        <label>Last Name</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </>
    );
}

export default LogInPage;