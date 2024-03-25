import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { showCartActions } from '../../store/showCart';
import { useSelector } from 'react-redux';


const CartButton = (props) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products)
  function handelClick(){

    dispatch(showCartActions.showcart());
  }

  return (
    <button className={classes.button} onClick={handelClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{(cart)?cart.length:0}</span>
    </button>
  );
};

export default CartButton;
