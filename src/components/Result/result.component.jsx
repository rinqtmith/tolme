import React from 'react';

import { Message } from 'semantic-ui-react';

const ResultComponent = ({ result, checkValue, value }) => (
  <React.Fragment>
    {!result.includes('Value') ? (
      !result.includes('Thickness') ? (
        value !== 'angular' ? (
          <Message
            style={{ marginBottom: '1em' }}
          >{`${checkValue}±${result}`}</Message>
        ) : (
          <Message style={{ marginBottom: '1em' }}>{`±${result}`}</Message>
        )
      ) : (
        <Message style={{ marginBottom: '1em' }}>{result}</Message>
      )
    ) : (
      <Message style={{ marginBottom: '1em' }}>{result}</Message>
    )}
  </React.Fragment>
);

export default ResultComponent;
