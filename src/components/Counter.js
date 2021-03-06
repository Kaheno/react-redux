import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; // redux method to get 'store' data
import { counterActions } from "../store/counter"; // reducers functionality from "createSlice"

const Counter = () => {
  const dispatch = useDispatch(); // Dispatching "store"

  const counter = useSelector((state) => state.counter.counter); // Get "store" data
  const show = useSelector((state) => state.counter.showCounter); // true/false

  //  Dynamically changing dispatch values
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // Automatically by default will set { payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment + 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*

// ** 5 Redux with Class-Based Components **

 import { Component } from "react";
 import { connect } from "react-redux";

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// Equivalent to => useSelector
const mapStateToProps = (state) => {
  return {
    // This will be passed as "props" to the class
    counter: state.counter,
  };
};

// Equivalent to => useDispatch
const mapDispatchToProps = (dispatch) => {
  return {
    // This will be passed as "props" to the class
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

// connect => Receives 2 functions
// returns a function => which we call our class (Counter) as parameter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

*/
