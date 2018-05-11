import './index.css';

import { Provider, connect } from 'react-redux';
import { Reducer, createStore } from 'redux';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './store/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const mapStateToProps /*:  (state) => StateFromProps */ = (state) => ({
    cells: state.cells,
    score: state.score
});

const mapDispatchToProps /* :  (dispatch) => DispatchFromProps */ = (dispatch) => ({
    onStartGame: () => {
        dispatch({ type: 'START_GAME' });
    },
    onMoveCells: (direction) => {
        dispatch({ type: 'MOVE_CELLS', payload: { direction } });
    },
    onRemoveAndIncreaseCells: () => {
        dispatch({ type: 'REMOVE_AND_INCREASE_CELLS' });
    },
    onPopulateField: () => {
        dispatch({ type: 'POPULATE_FIELD' });
    }
});

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById('root')
);