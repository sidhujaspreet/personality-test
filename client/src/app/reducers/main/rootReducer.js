import {combineReducers} from 'redux';
import question_list from "../QuestionReducer";
import answers from "../AnswerReducer";

export default combineReducers({
  question_list,
  answers
});
