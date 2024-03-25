import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { PRODUCTS } from '../../data/ProductsData';

const Products = (props) => {

  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
     {
      PRODUCTS.map((item,index)=>{

        return (
          <ProductItem key={index}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        );
      })
     }
     </ul>
    </section>
  );
};

export default Products;
