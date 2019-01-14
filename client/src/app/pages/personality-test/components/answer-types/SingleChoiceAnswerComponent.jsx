import * as React from 'react';

const SingleChoiceAnswer = ({ question, answerOnChange }) => (
    <form onChange={(e) => answerOnChange({questionId: question._id, text: question.question, value: e.target.value})}>
      {question.question_type.options.map((option) => (
          <p key={option} className='single-choice'><input type="radio" name="gender" value={option}/> {option}</p>))}
    </form>
);

export default SingleChoiceAnswer;
