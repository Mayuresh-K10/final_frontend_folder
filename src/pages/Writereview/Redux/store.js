import { createStore } from 'react-redux';
import rootReducer from './reducers';

// Create Redux store
const store = createStore(rootReducer);

export default store;
