import { applyMiddleware, createStore, combineReducers } from 'redux';

import { Users } from './users';
import { SingleUser } from './singleUser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
        users:Users,
        singleUser:SingleUser
      }), // reducer
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };