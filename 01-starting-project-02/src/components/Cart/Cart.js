import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const showCart = useSelector((state) => state.showcart.showcart);


  return (<>
  {(showCart)?
          (<Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            {
              cart?(
                <ul>
             <CartItem
                item={cart}
              />
              <h2>Total amount - {total}</h2>
            </ul>
              ):<h2>Cart is Empty......</h2>
            }
          </Card>)
          :
          null}
  </>);
} 

export default Cart;
