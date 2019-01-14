import * as axios from "axios";

export const POSTING_ANSWER_DATA = 'POSTING_ANSWER_DATA';
export const POSTING_ANSWER_DATA_SUCCESS = 'POSTING_ANSWER_DATA_SUCCESS';
export const POSTING_ANSWER_DATA_FAILURE = 'POSTING_ANSWER_DATA_FAILURE';


const postingAnswerData = () => {
  return {
    type: POSTING_ANSWER_DATA
  }
};

const postingAnswerDataSuccess = (data) => {
  return {
    type: POSTING_ANSWER_DATA_SUCCESS,
    payload: data
  }
};

const postingAnswerDataFailure = (data) => {
  return {
    type: POSTING_ANSWER_DATA_FAILURE,
    payload: data
  }
};

export function postAnswerList(answerList) {
  return (dispatch) => {
    dispatch(postingAnswerData);
  
    axios.post('http://localhost:2000/answers', answerList)
        .then(res => {
          alert('Success');
          return dispatch(postingAnswerDataSuccess(res))
        })
        .catch(error => {
          console.log('Failure');
          return dispatch(postingAnswerDataFailure(error));
        });
    return;
  }
}
