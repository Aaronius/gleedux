import React from 'react';
import { increment, decrement } from '../actions';
import store from '../store';
import { Component, FuncSubject } from 'rx-react';

const STEP_AMOUNT = 1;

class Counter extends Component {
  getStateStream() {
    return store.map(state => ({ counter: state.get('counter') }))
  }

  componentWillMount() {
    super.componentWillMount();

    // The amount to increment/decrement could be tied to a textfield.
    this.incrementClicked = FuncSubject.create(() => STEP_AMOUNT);
    this.incrementClicked.subscribe(increment);

    this.decrementClicked = FuncSubject.create(() => STEP_AMOUNT);
    this.decrementClicked.subscribe(decrement);
  }

  render() {
    return (
      <div>
        <div>Counter: { this.state.counter }</div>
        <div>
          <button onClick={this.incrementClicked}>Increment</button>
          <button onClick={this.decrementClicked}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
