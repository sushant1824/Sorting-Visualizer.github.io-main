import React,{useState,useEffect} from "react";
import fire from './fire';
import './index.css';
import Login from "./component/login";
import Main from "./component/main";


const App = () => {
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [userName,setUserName] = useState('');
  const [hasAccount,setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin = () =>{
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err) => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () =>{
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    clearInputs();
    fire.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user);
      }
      else{
        setUser(""); 
      }
    })
  }

  useEffect (() => {
    authListener();
  },[])


  return (

    <div className="app">
      {user ? (<Main handleLogout={handleLogout} />):(
      <Login 
      userName={userName}
      setUserName={setUserName}
      email={email} 
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError} />)}      
    </div>
  );
}

export default App;
