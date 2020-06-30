import React from "react";
import { Dropdown } from "semantic-ui-react";

const SelectMe = ({ name, label, standard, handleChanges, show, value }) => (
  <Dropdown
    fluid
    search
    selection
    clearable
    selectOnBlur={false}
    name={name}
    placeholder={`Select a ${label}... `}
    style={{ marginBottom: "1em" }}
    options={standard}
    onChange={(event, data) => handleChanges(event, data)}
    disabled={!show}
    value={value}
  />
);

export default SelectMe;
