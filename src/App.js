import React, { useState, useEffect } from 'react';
import {
  Container,
  Segment,
  Header,
  Icon,
  Input,
  Button,
  Message,
} from 'semantic-ui-react';

import { tolStandard, tolType, tolClass, calcTol } from './utils/standards';

import SelectMe from './components/select.component';

const App = () => {
  const [tolStandardState, setTolStandardState] = useState({
    name: 'tolStandard',
    value: '',
    options: tolStandard,
    label: 'tolerance standard',
    show: true,
  });
  const [tolTypeState, setTolTypeState] = useState({
    name: 'tolType',
    value: '',
    options: tolType,
    label: 'tolerance type',
    show: false,
  });
  const [tolClassState, setTolClassState] = useState({
    name: 'tolClass',
    value: '',
    options: tolClass,
    label: 'tolerance class',
    show: false,
  });
  const [checkValue, setCheckValue] = useState(null);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (tolStandardState.value && !tolTypeState.show) {
      setTolTypeState({
        ...tolTypeState,
        show: true,
      });
    }
    if (!tolStandardState.value && tolTypeState.show) {
      setTolTypeState({
        ...tolTypeState,
        value: '',
        show: false,
      });
      setCheckValue(null);
      setResult('');
    }

    if (tolTypeState.value && !tolClassState.show) {
      setTolClassState({
        ...tolClassState,
        show: true,
      });
    }
    if (!tolTypeState.value && tolClassState.show) {
      setTolClassState({
        ...tolClassState,
        value: '',
        show: false,
      });
      setCheckValue(null);
      setResult('');
    }
  }, [tolStandardState, tolTypeState, tolClassState, checkValue]);

  const updateTolStandard = (event, data) => {
    const { value } = data;

    setTolStandardState({
      ...tolStandardState,
      value,
    });
    setCheckValue(null);
    setResult('');
  };

  const updateTolType = (event, data) => {
    const { value } = data;

    setTolTypeState({
      ...tolTypeState,
      value,
    });
    setCheckValue(null);
    setResult('');
  };

  const updateTolClass = (event, data) => {
    const { value } = data;

    setTolClassState({
      ...tolClassState,
      value,
    });
    setCheckValue(null);
    setResult('');
  };

  const handleValueChange = (event) => {
    const { value } = event.target;

    setCheckValue(value);
    setResult('');
  };

  const handleResult = () => {
    const result = calcTol(
      checkValue,
      tolStandardState.value,
      tolTypeState.value,
      tolClassState.value,
    );
    setResult(result);
  };

  return (
    <Container text fluid>
      <Segment
        raised
        padded="very"
        textAlign="center"
        style={{ margin: '2em' }}
      >
        <Header as="h1" icon>
          <Icon name="sitemap" />
          Tolerance Standards
          <Header.Subheader>
            Please select a tolerance standard to start.
          </Header.Subheader>
        </Header>
        <Container fluid>
          <SelectMe
            name={tolStandardState.name}
            label={tolStandardState.label}
            standard={tolStandardState.options}
            handleChanges={updateTolStandard}
            show={tolStandardState.show}
            value={tolStandardState.value}
          />
          <SelectMe
            name={tolTypeState.name}
            label={tolTypeState.label}
            standard={tolTypeState.options}
            handleChanges={updateTolType}
            show={tolTypeState.show}
            value={tolTypeState.value}
          />
          <SelectMe
            name={tolClassState.name}
            label={tolClassState.label}
            standard={tolClassState.options}
            handleChanges={updateTolClass}
            show={tolClassState.show}
            value={tolClassState.value}
          />
          <Input
            fluid
            type="number"
            name="checkValue"
            disabled={tolClassState.value === '' || !tolClassState.show}
            style={{ marginBottom: '1em' }}
            value={checkValue || ''}
            onChange={handleValueChange}
          />
        </Container>
        {result && result !== 'Value must be between 0,5 and 4000' ? (
          tolType.value !== 'angular' ? (
            <Message>{`${checkValue}±${result}`}</Message>
          ) : (
            <Message>{`±${result}`}</Message>
          )
        ) : result ? (
          <Message>{result}</Message>
        ) : null}
        <Button
          style={{ marginBottom: '1em' }}
          disabled={tolClassState.value === '' || !tolClassState.show}
          onClick={handleResult}
        >
          Calculate
        </Button>
      </Segment>
    </Container>
  );
};

export default App;