import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

// Muestra de productos
import { showWatches } from './reducers/watches'
import { showShirts } from './reducers/shirts'
import { showVideogames } from './reducers/videogames.js'

// Buscador de productos
import watchFinder from './reducers/watchFinder';
import shirtFinder from './reducers/shirtFinder';
import videogameFinder from './reducers/videogameFinder';

const reducers = combineReducers({
    watch: showWatches,
    shirt: showShirts,
    videogame: showVideogames,
    watchFinder,
    shirtFinder,
    videogameFinder
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
