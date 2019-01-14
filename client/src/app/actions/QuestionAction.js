import {questions} from "../data/questions";
import * as axios from "axios";

export const FETCHING_QUESTION_DATA = 'FETCHING_QUESTION_DATA';
export const FETCH_QUESTION_DATA_SUCCESS = 'FETCH_QUESTION_DATA_SUCCESS';
export const FETCHING_QUESTION_DATA_FAILURE = 'FETCHING_QUESTION_DATA_FAILURE';

const fetchingQuestionDataAction = () => {
  return {
    type: FETCHING_QUESTION_DATA
  }
};
const fetchQuestionDataSuccess = (data) => {
  return {
    type: FETCH_QUESTION_DATA_SUCCESS,
    payload: data
  }
};
const fetchQuestionDataFailure = (error) => {
  return {
    type: FETCHING_QUESTION_DATA_FAILURE,
    payload: error
  }
};

export function fetchQuestionData(dispatch) {
  const corsProxy = `https://cors-anywhere.herokuapp.com/`,
      url = `http://localhost:2000/questions`;
  dispatch(fetchingQuestionDataAction());
  
  const mockData = false;
  if (mockData) {
    dispatch(fetchQuestionDataSuccess(questions.map((value, i) => ({...value, id: i + 1}))));
    return;
  }
  axios.get(url)
      .then(res => dispatch(fetchQuestionDataSuccess(res.data)))
      .catch(error => dispatch(fetchQuestionDataFailure(error)));
}
