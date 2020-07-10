import React from "react";
import {
  Container,
  Segment,
  Header,
  Icon,
  Input,
  Button,
  Message,
} from "semantic-ui-react";

import { tolStandard, tolType, tolClass, calcTol } from "./standards";

import SelectMe from "./select.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tolStandard: {
        name: "tolStandard",
        value: "",
        options: tolStandard,
        label: "tolerance standard",
        show: true,
      },
      tolType: {
        name: "tolType",
        value: "",
        options: tolType,
        label: "tolerance type",
        show: false,
      },
      tolClass: {
        name: "tolClass",
        value: "",
        options: tolClass,
        label: "tolerance class",
        show: false,
      },
      checkValue: null,
      result: "",
    };
  }

  componentDidUpdate() {
    const { tolStandard, tolType, tolClass, result } = this.state;

    if (tolStandard.value === "" && tolType.show) {
      this.setState((state) => ({
        ...state,
        tolType: {
          ...tolType,
          value: "",
          show: false,
        },
        result: "",
        checkValue: null,
      }));
    }

    if (tolStandard.value !== "" && !tolType.show) {
      this.setState((state) => ({
        ...state,
        tolType: {
          ...tolType,
          show: true,
        },
        result: "",
        checkValue: null,
      }));
    }

    if (tolType.value === "" && tolClass.show) {
      this.setState((state) => ({
        ...state,
        tolClass: {
          ...tolClass,
          value: "",
          show: false,
        },
        result: "",
        checkValue: null,
      }));
    }

    if (tolType.value !== "" && !tolClass.show) {
      this.setState((state) => ({
        ...state,
        tolClass: {
          ...tolClass,
          show: true,
        },
        result: "",
        checkValue: null,
      }));
    }

    if (tolClass.value === "" && result) {
      this.setState((state) => ({
        ...state,
        result: "",
        checkValue: null,
      }));
    }
  }

  handleChanges = (event, data) => {
    const { name, value } = data;
    this.setState((state) => ({
      ...state,
      [name]: {
        ...state[name],
        value: value,
      },
      result: "",
      checkValue: null,
    }));
  };

  handleValueChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value,
      result: "",
    });
  };

  handleResult = () => {
    const { checkValue, tolStandard, tolType, tolClass } = this.state;
    const result = calcTol(
      checkValue,
      tolStandard.value,
      tolType.value,
      tolClass.value
    );
    this.setState({
      ...this.state,
      result: result,
    });
  };

  render() {
    const { tolStandard, tolType, tolClass, checkValue, result } = this.state;

    return (
      <Container text fluid>
        <Segment
          raised
          padded="very"
          textAlign="center"
          style={{ margin: "2em" }}
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
              name={tolStandard.name}
              label={tolStandard.label}
              standard={tolStandard.options}
              handleChanges={this.handleChanges}
              show={tolStandard.show}
              value={tolStandard.value}
            />
            <SelectMe
              name={tolType.name}
              label={tolType.label}
              standard={tolType.options}
              handleChanges={this.handleChanges}
              show={tolType.show}
              value={tolType.value}
            />
            <SelectMe
              name={tolClass.name}
              label={tolClass.label}
              standard={tolClass.options}
              handleChanges={this.handleChanges}
              show={tolClass.show}
              value={tolClass.value}
            />
            <Input
              fluid
              type="number"
              name="checkValue"
              disabled={tolClass.value === "" || !tolClass.show}
              style={{ marginBottom: "1em" }}
              value={checkValue || ""}
              onChange={this.handleValueChange}
            />
          </Container>
          {result && result !== "Value must be between 0,5 and 4000" ? (
            <Message>{`${checkValue}±${result}`}</Message>
          ) : result ? (
            <Message>{result}</Message>
          ) : null}
          <Button
            style={{ marginBottom: "1em" }}
            disabled={tolClass.value === "" || !tolClass.show}
            onClick={this.handleResult}
          >
            Calculate
          </Button>
        </Segment>
      </Container>
    );
  }
}

export default App;
