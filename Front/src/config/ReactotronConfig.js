import Reactotron from 'reactotron-react-js';

if (__DEV__) {
  const tron = Reactotron.configure().connect();

  tron.clear();

  console.tron = tron;
}
