import * as React from 'react';
import './index.scss';

const ErrorComponent = () => {
  return (
      <div className="container">
        <h5>{`Error: Path doesn't exist!!!`}</h5>
      </div>
  );
};

export default ErrorComponent;
