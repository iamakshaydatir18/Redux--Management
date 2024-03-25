import Counter from './components/Counter';
import Header from './components/Header.js';
import Auth from './components/Auth.js'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {

  const islogedIn = useSelector( (state )=> state.auth.isAuthenticated);


  return (
    <Fragment>
     <Header></Header>
      { (!islogedIn) ? (<Auth></Auth>): <UserProfile></UserProfile>}
      <Counter></Counter>
    </Fragment>
  );
}

export default App;
