import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart.js'
import { UseSelector } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  function addToCart(name){
    

    dispatch(cartActions.increment({
      title,
      price,
      description,
      quantity: 1,
      total:price
    }));
    // const existingStateProducts = cart.products.slice();

    // let existingcarttotal = cart.total; 

    // const isExisting = existingStateProducts.find((item) => item.title === name);

    // if(isExisting){

    //   const index = existingStateProducts.findIndex((item) => item.title === name);

    //   const existingItem = { ...existingStateProducts[index]};

    //   existingItem.quantity ++;
    //   existingItem.total +=  existingItem.price;
    //   existingcarttotal += existingItem.price;
    //   existingStateProducts[index] = existingItem;


    // }else{

    //   existingStateProducts.push({
    //     title : title,
    //     price:price,
    //     description:description,
    //     quantity: 1,
    //     total:price
    //   });
    //   existingcarttotal += price;
    // }

    // const newCart = {
    //   products: existingStateProducts,
    //   total: existingcarttotal
    // }

    // dispatch(cartActions.CartReplace(newCart));


  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={()=>{ addToCart(title) }}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
