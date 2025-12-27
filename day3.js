
// Import redux library

const redux =require('redux')
const reduxLogger=require('redux-logger')

    // Import redux library

const createStore=redux.createStore

const combineReducers= redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()


// Action type (constant)
const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM="BUY_ICECREAM"



// Action creator (returns an action object)
function buyIcecream(){
    return{
        type:BUY_ICECREAM
    }
}

function buyCake(){
    return {
        type:BUY_CAKE,
        info : 'First redux action'
    }


}


const initiaCakeState={
    numOfCakes:10
}

const initiaIceCreamState={
    numOfIceCreams:20
}
//(previousState,action) =>newState


// Reducer function
// It receives the current state and an action,
// then returns the new state based on the action type.



const cakeReducer=(state=initiaCakeState,action)=>{
   switch(action.type){
    case BUY_CAKE: return {
        ...state, 
        numOfCakes:state.numOfCakes -1
    }
    
    default:
        return state 
   } 
}

const IceCreameReducer=(state=initiaIceCreamState,action)=>{
   switch(action.type){
   
     case BUY_ICECREAM: return {
        ...state, 
        numOfIceCreams:state.numOfIceCreams -1
    }
    default:
        return state 
   } 
}



const rootReducer=combineReducers({
    cake:cakeReducer,
    IceCreame:IceCreameReducer
})


// Create Redux store using the reducer
const store= createStore(rootReducer,applyMiddleware(logger))

// Print the initial state
console.log("inital state",store.getState())

// Subscribe to store updates
// This function runs every time the state changes
const unsubscribe=store.subscribe(()=>{})

// Dispatch actions (state updates happen here)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


// Stop listening for updates
// unsubscribe() removes the subscription created above
unsubscribe();







