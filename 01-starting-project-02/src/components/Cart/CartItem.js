import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart';
const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    function incrementQuantity(id){
      dispatch(cartActions.incrementQuantity({id:id}));
    }

    function decrementQuantity(id){
      dispatch(cartActions.decrementQuantity({id:id}))
    }
  
  return (<>
          {
          item.map(item =>{
                return (
                  <li className={classes.item} key={item.title}>
                 <header>
                <h3>{item.title}</h3>
          <div className={classes.price}>
          ${item.total.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${item.price}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{item.quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={()=>{decrementQuantity(item.title)}}>-</button>
            <button onClick={()=>{incrementQuantity(item.title)}}>+</button>
          </div>
        </div>
      </li>
                );
          })
        }
  
  </>
  );
};

export default CartItem;
