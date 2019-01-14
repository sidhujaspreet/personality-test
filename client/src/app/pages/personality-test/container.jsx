import { connect } from 'react-redux';
import FormComponent from './index';
import {fetchQuestionData} from "../../actions/QuestionAction";
import {postAnswerList} from "../../actions/AnswerAction";

function mapStateToProps(state) {
  return {
    questionList: state.question_list.list,
    isFetching: state.question_list.isFetching,
    answerPostStatus: state.answers.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestionData: () => dispatch(fetchQuestionData),
    submitAnswer: (answerList) => dispatch(postAnswerList(answerList))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
