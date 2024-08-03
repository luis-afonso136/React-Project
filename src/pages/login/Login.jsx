import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <div className="input-container">
                    <i className="ri-user-line"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-container">
                    <i className="ri-lock-line"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <button>Login</button>
                <div className="no-account">
                    <p>Dont have an account? <a href="/register">Register</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;