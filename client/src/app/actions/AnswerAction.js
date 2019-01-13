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
    console.log(answerList);
    dispatch(postingAnswerDataSuccess({success: true}));
    return;
  }
}
