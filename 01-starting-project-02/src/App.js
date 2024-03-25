import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {  useSelector , useDispatch} from 'react-redux';
import { showCartActions } from './store/showCart';
import Notification from './components/UI/Notification';
import { cartActions } from './store/cart';


let isInitial = true;

function App() {

  const cart = useSelector((state) => state.cart);
  const changed = useSelector((state) =>state.cart.change);
  const notification = useSelector((state) => state.showcart.notification);
  const dispatch = useDispatch();
  
  useEffect(()=>{

    const responseData = async ()=>{
      dispatch(showCartActions.showNotification({
        status:'pending',
        title :'Sending...',
        message : 'Sending cart data!'
      }));

      const response = await  fetch('https://redux-test-a6e5d-default-rtdb.firebaseio.com/cart.json',{
        method :'PUT',
        body: JSON.stringify(cart)
      });


      if(!response){
        dispatch(showCartActions.showNotification({
          status:'error',
          title :'Error!',
          message : 'Error in sending cart data!'
        }));
      }

      dispatch(showCartActions.showNotification({
        status:'success',
        title :'Success!',
        message : 'Sent cart data successfully!'
      }));

    } 

    if(isInitial){
      isInitial = false;
      return;
    }


    if(changed){

      responseData().catch((error) =>{
        dispatch(showCartActions.showNotification({
          status:'error',
          title :'Error!',
          message : 'Sending cart data failed!'
        }));
      })
    }
   
  },[cart,dispatch])


  useEffect(()=>{


    const fetchFromDB = async () =>{

           const response = await fetch('https://redux-test-a6e5d-default-rtdb.firebaseio.com/cart.json');

           if(!response.ok){
            dispatch(showCartActions.showNotification({
              status:'error',
              title :'Error!',
              message : 'Sending loading data from cart!'
            }));
           }

           const resData = await response.json();
           return resData;
    }

    try{
      const response =  fetchFromDB();
      console.log("response from fetch",response);
      response.then(res => dispatch(cartActions.CartReplace(res)));
      
    }catch(error){
      dispatch(showCartActions.showNotification({
        status:'error',
        title :'Error!',
        message : 'Sending loading data from cart!'
      }));
    }

  },[dispatch]);


  return (
    <Fragment>
      { notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
      <Cart />
      <Products />
    </Layout>
    </Fragment>
   
  );
}

export default App;
