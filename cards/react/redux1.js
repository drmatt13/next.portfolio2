export default [
{

"cmd": `npm i redux redux-devtools-extention redux-thunk`,

"file file structure": `App.js
store.js
/actions
  actions.js
/reducers
  combineReducers.js
  reduxReducer1.js
  reduxReducer2.js`

},

{

"redux reduxReducer1.js": `const initialState = {
  user: undefined,
  navOpen: false,
  logoTransparent: false,
  about: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH':
      return {
        ...state,
        user: action.payload
      }
    case 'OPEN_NAV':
      if (!state.navOpen) return { ...state, navOpen: true }
      return state;
    case 'CLOSE_NAV':
      if (state.navOpen) return { ...state, navOpen: false }
      return state;
    case 'IS_TRANSPARENT':
      return {
        ...state,
        navOpen: false,
        logoTransparent: true
      }
    case 'IS_NOT_TRANSPARENT':
      return {
        ...state,
        navOpen: false,
        logoTransparent: false
      }
    default:
      return state;
  }
}`,

"redux reduxReducer2.js": `const initialState = {
  bool: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE':
      return {
        ...state,
        bool: !state.bool
      }
    default:
      return state;
  }
}`,

"redux combineReducers.js": `import { combineReducers } from 'redux'
import reducer1 from './reduxReducer1'
import reducer2 from './reduxReducer2'

export default combineReducers({
  reduxReducer1,
  reduxReducer2
});`,

"redux store.js": `import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from './reducers/combineReducers'
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  combineReducers, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;`,

"redux actions.js": `import store from '../store';
  
export const openNav = () => {
  store.dispatch({
    type: 'OPEN_NAV'
  });
}

export const closeNav = () => {
  store.dispatch({
    type: 'CLOSE_NAV'
  });
}

export const logoTransparent = (bool) => {
  if (bool) {
    store.dispatch({
      type: 'IS_TRANSPARENT'
    });
  } else {
    store.dispatch({
      type: 'IS_NOT_TRANSPARENT'
    });
  }
}

export const selectBackground = (i) => {
  store.dispatch({
    type: 'SELECT_BACKGROUND',
    payload: i
  });
}

export const toggle = () => {
  store.dispatch({
    type: 'TOGGLE'
  });
}`

},

{

"next _app.js": `import { Provider } from 'react-redux'
import store from './store'

const App = ({ Component, pageProps }) => {

  return <>
    <Provider store={store} >
      <Component {...pageProps} />  
    </Provider>
  </>
}

export default App`,

"react connect.js": `  import { memo } from 'react'
  
//redux
import { connect } from 'react-redux'

const Component = memo(({ propName: {navOpen, logoTransparent, background} }) => {

  return <></>
});

const mapStateToProps = state => ({
  propName: state.reducer1
});

export default connect(mapStateToProps)(Component)`,

"react dispatch.js": `  import { useEffect } from 'react';
  
//redux
import { openNav, closeNav, selectBackground } from '../../actions/actions';

const Component = () => {

  useEffect(() => {
    openNav();
  }, []);

  return <></>
});

export default Component;`,





}
]