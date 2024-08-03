import './Register.css';

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Register</h2>
                <div className="input-container">
                    <i className="ri-user-line"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-container">
                    <i className="ri-mail-line"></i>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-container">
                    <i className="ri-lock-line"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="input-container">
                    <i className="ri-lock-line"></i>
                    <input type="password" placeholder="Confirm Password" />
                </div>
                <button>Register</button>
                <div className="have-account">
                    <p>Already have an account? <a href="/login">Login here</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;