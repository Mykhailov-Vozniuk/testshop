import {configureStore} from '@reduxjs/toolkit';
import Reducer from './Reducer.js';
import createSagaMiddleware from 'redux-saga'
import mySaga from './Sagas.js';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		productReducer: Reducer
	},
	middleware: [sagaMiddleware]
})

sagaMiddleware.run(mySaga)

export default store;