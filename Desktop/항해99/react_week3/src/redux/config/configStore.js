// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

const rootReducer = combineReducers({
  //이곳에 Modules 폴더에 넣어놓은 state의 묶음들을 넣을 예정
  //즉, 리듀서
  counter: counter,
});
const store = createStore(rootReducer);

export default store;
