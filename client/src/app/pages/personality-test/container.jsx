import { connect } from 'react-redux';
import FormComponent from './index';
import {fetchQuestionData} from "../../actions/QuestionAction";

function mapStateToProps(state) {
  return {
    questionList: state.question_list.list,
    isFetching: state.question_list.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestionData: () => dispatch(fetchQuestionData)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
