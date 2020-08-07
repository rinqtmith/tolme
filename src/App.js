import React, { useState, useEffect } from 'react';
import {
  Container,
  Segment,
  Header,
  Icon,
  Input,
  Button,
} from 'semantic-ui-react';

import { tolStandard, tolType, tolClass } from './utils/standards';
import { calcTol } from './utils/calculation';

import SelectMe from './components/Select/select.component';
import ResultComponent from './components/Result/result.component';

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
    options: tolType[tolStandardState.value] || [],
    label: 'tolerance type',
    show: false,
  });
  const [tolClassState, setTolClassState] = useState({
    name: 'tolClass',
    value: '',
    options: tolClass[tolStandardState.value] || [],
    label: 'tolerance class',
    show: false,
  });
  const [checkValue, setCheckValue] = useState(null);
  const [thickness, setThickness] = useState(null);
  const [result, setResult] = useState('');

  useEffect(() => {
    // Show tolerance type if tolerance standard is chosen
    if (tolStandardState.value && !tolTypeState.show) {
      setTolTypeState({
        ...tolTypeState,
        options: tolType[tolStandardState.value],
        show: true,
      });
    }
    // Hide tolerance type if tolerance standard is not chosen
    // Reset value and result
    if (!tolStandardState.value && tolTypeState.show) {
      setTolTypeState({
        ...tolTypeState,
        value: '',
        options: tolType[tolStandardState.value] || [],
        show: false,
      });
      setCheckValue(null);
      setThickness(null);
      setResult('');
    }

    // Show tolerance class if tolerance type is chosen
    if (tolTypeState.value && !tolClassState.show) {
      setTolClassState({
        ...tolClassState,
        value: '',
        options: tolClass[tolStandardState.value] || [],
        show: true,
      });
    }
    // Hide tolerance class if tolerance type is not chosen
    // Reset value and result
    if (!tolTypeState.value && tolClassState.show) {
      setTolClassState({
        ...tolClassState,
        value: '',
        show: false,
      });
      setCheckValue(null);
      setThickness(null);
      setResult('');
    }
  }, [tolStandardState, tolTypeState, tolClassState, checkValue]);

  // Update tolerance standard state
  const updateTolStandard = (event, data) => {
    const { value } = data;

    setTolTypeState({
      ...tolTypeState,
      value: '',
      show: false,
    });

    setTolStandardState({
      ...tolStandardState,
      value,
    });

    setCheckValue(null);
    setThickness(null);
    setResult('');
  };

  // Update tolerance type state
  const updateTolType = (event, data) => {
    const { value } = data;

    setTolClassState({
      ...tolClassState,
      value: '',
      show: false,
    });

    setTolTypeState({
      ...tolTypeState,
      value,
    });
    setCheckValue(null);
    setThickness(null);
    setResult('');
  };

  // Update tolerance class state
  const updateTolClass = (event, data) => {
    const { value } = data;

    setTolClassState({
      ...tolClassState,
      value,
    });
    setCheckValue(null);
    setThickness(null);
    setResult('');
  };

  // Handle value change of input
  const handleValueChange = (event) => {
    const { value } = event.target;

    setCheckValue(value);
    setResult('');
  };

  // Handle value change of thickness
  const handleThickness = (event) => {
    const { value } = event.target;

    setThickness(value);
    setCheckValue(null);
    setResult('');
  };

  // Calculate result
  const handleResult = () => {
    const th = thickness ? thickness : 0;
    const result = calcTol(
      checkValue,
      tolStandardState.value,
      tolTypeState.value,
      tolClassState.value,
      th,
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
          {tolStandardState.value === '6930-1' ? (
            <Input
              fluid
              type="number"
              name="thickness"
              placeholder="Please enter thickness of the material"
              disabled={tolClassState.value === '' || !tolClassState.show}
              style={{ marginBottom: '1em' }}
              value={thickness || ''}
              onChange={handleThickness}
            />
          ) : null}
          <Input
            fluid
            type="number"
            name="checkValue"
            disabled={
              tolStandardState.value === '6930-1'
                ? !thickness
                : tolClassState.value === '' || !tolClassState.show
            }
            style={{ marginBottom: '1em' }}
            value={checkValue || ''}
            onChange={handleValueChange}
          />
        </Container>
        {result ? (
          <ResultComponent
            result={result}
            checkValue={checkValue}
            value={tolTypeState.value}
          />
        ) : null}
        <Button
          style={{ marginBottom: '1em' }}
          disabled={!checkValue}
          onClick={handleResult}
        >
          Calculate
        </Button>
      </Segment>
    </Container>
  );
};

export default App;
