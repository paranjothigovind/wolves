import React, { Component } from "react";
import TableRow from "./filterData";

const mockData = [
  {
    id: 0,
    name: "CodeSandbox",
    url: ""
  },
  {
    id: 1,
    name: "StackOverflow",
    url: ""
  },
  {
    id: 2,
    name: "Github",
    url: "h"
  }
];

export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0
    };
  }

  changeHandler = id => {
    this.setState({
      selectedId: id
    });
  };

  render() {
    return (
      <table>
        <tbody>
          {mockData.map(rowData => (
            <TableRow
              key={rowData.id}
              selectedId={this.state.selectedId}
              rowData={rowData}
              onSelect={this.changeHandler}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
