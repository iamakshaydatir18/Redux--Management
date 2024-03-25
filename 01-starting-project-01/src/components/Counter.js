import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const toogleCounter = useSelector((state) => state.counter.showToggle);

  const incrementCounter = () =>{
    //dispatch({type:'increment'})
    dispatch(counterActions.increment());
  }

  const decrementCounter = () => {
    //dispatch({type:'decrement'})
    dispatch(counterActions.decrement());
  }

  const increaseby5 = () =>{
    //dispatch({type:'increase', amount : 10})
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    //dispatch({type:'toggleCounter'})
    dispatch(counterActions.toogleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { toogleCounter && (<div className={classes.value}>{counter}</div>) }
      <div>
        <button onClick={incrementCounter}>increment</button>
        <button onClick={increaseby5}>increase by 5</button>
        <button onClick={decrementCounter}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
