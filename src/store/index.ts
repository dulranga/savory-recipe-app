import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  console.log("=================================");
  console.log({ store: store.getState() });
  console.log("=================================");
});

export type AppDispatch = typeof store.dispatch;

export default store;
