import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(JSON.stringify({ store: store.getState() })));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
