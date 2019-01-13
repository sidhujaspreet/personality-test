import * as React from 'react';

const SingleChoiceAnswer = ({ question, answerOnChange }) => (
    <form onChange={(e) => answerOnChange({questionId: question.id, text: question.question, value: e.target.value})}>
      {question.question_type.options.map((option) => (
          <p key={option}><input type="radio" name="gender" value={option}/> {option}</p>))}
    </form>
);

export default SingleChoiceAnswer;
