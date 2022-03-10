import './LogInPage.css';

function LogInPage() {
    return (
        <>
            <div className="wrapped">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogInPage;