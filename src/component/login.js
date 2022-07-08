import React from "react";

const Login = (props) => {
    const { userName,setUserName,email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError} = props;
    return (
        <section className="login">
            <div className="loginContainer">
            <div>
                    {hasAccount ? (
                        <>
                          <p className="registerText">Login</p>
                        </>
                    ): (
                        <>
                          <p className="registerText">Sign Up</p>
                        </>
                    )}
            </div>
            <div>
                    {hasAccount ? (
                        <>
                        </>
                    ): (
                        <>
                          <label>Username</label>
                            <input
                                type="text"
                                autoFocus
                                required
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}                    
                            />
                        </>
                    )}
            </div>

                <label>Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}                    
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't Have an Account ? <span onClick={() => setHasAccount(!hasAccount) }>Sign Up</span></p>
                        </>
                    ): (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an Account !<span onClick={() => setHasAccount(!hasAccount) }>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Login;