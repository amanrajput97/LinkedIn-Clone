import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //User is logged In
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );

      }
      else {
        //the user has logged out
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
     
    <Header />
      
      {!user ? <Login /> : (
        <div className="app__body">
      <Sidebar/>
      <Feed />
      <Widgets />

    </div>
  )}

</div>
  );
}

export default App;
