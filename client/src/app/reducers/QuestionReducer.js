import {questionData} from "./main/initialState";
import {FETCHING_QUESTION_DATA, FETCHING_QUESTION_DATA_FAILURE, FETCH_QUESTION_DATA_SUCCESS} from "../actions/QuestionAction";

let question_list = (state = questionData, action) => {
  switch (action.type) {
    case FETCHING_QUESTION_DATA:
      return {...state, ...{isFetching: true}};
    case FETCH_QUESTION_DATA_SUCCESS:
      return {...state, ...{isFetching: false, list: action.payload}};
    case FETCHING_QUESTION_DATA_FAILURE:
      return {...state, ...{isFetching: false, error: action.payload}};
    default:
      return state;
  }
};

export default question_list;
