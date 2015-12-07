import Rx from 'rx';
import store from './store';

export let increment = new Rx.Subject();
increment
  .map(amount => state => {
    return state.update('counter', counter => counter + amount);
  })
  .subscribe(store);

export let decrement = new Rx.Subject();
decrement
  .map(amount => state => {
    return state.update('counter', counter => counter - amount);
  })
  .subscribe(store);
