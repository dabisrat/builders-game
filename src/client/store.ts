import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import {GameState} from './reducers/gameReducer';

interface StoreState {
  gameState: Object;
  chatReducer: Object;
};

const store = createStore(
  rootReducer
);

export const getGameState = (): GameState => {
  const state = store.getState() as StoreState;
  return state.gameState as GameState;
};
 
export default store;