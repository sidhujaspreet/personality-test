import {questions} from "../data/questions";

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
      url = `localhost:8080//`;
  dispatch(fetchingQuestionDataAction());
  
  const mockData = true;
  if (mockData) {
    dispatch(fetchQuestionDataSuccess(questions.map((value, i) => ({...value, id: i + 1}))));
    return;
  }
  fetch(corsProxy + url)
      .then(response => response.json())
      .then(json => dispatch(fetchQuestionDataSuccess(json)))
      .catch(error => dispatch(fetchQuestionDataFailure(error)));
}
