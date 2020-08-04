import React from 'react';

import { Message } from 'semantic-ui-react';

const ResultComponent = ({ result, checkValue, value }) => (
  <React.Fragment>
    {result !== 'Value must be between 0,5 and 4000' ? (
      value !== 'angular' ? (
        <Message>{`${checkValue}±${result}`}</Message>
      ) : (
        <Message>{`±${result}`}</Message>
      )
    ) : (
      <Message>{result}</Message>
    )}
  </React.Fragment>
);

export default ResultComponent;
