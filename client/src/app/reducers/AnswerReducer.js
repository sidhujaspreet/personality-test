import {answersData} from "./main/initialState";
import {POSTING_ANSWER_DATA, POSTING_ANSWER_DATA_FAILURE, POSTING_ANSWER_DATA_SUCCESS} from "../actions/AnswerAction";

let answers = (state = answersData, action) => {
  switch (action.type) {
    case POSTING_ANSWER_DATA:
      return {...state, ...{isFetching: true}};
    case POSTING_ANSWER_DATA_SUCCESS:
      return {...state, ...{isFetching: false, status: action.payload}};
    case POSTING_ANSWER_DATA_FAILURE:
      return {...state, ...{isFetching: false, status: action.payload}};
    default:
      return state;
  }
};

export default answers;
