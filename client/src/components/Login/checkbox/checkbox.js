
import React from "react";


export class Checkbox extends React.PureComponent {

  render() {
    const { title, checked } = this.props;
    return <label class="" style={{ paddingLeft: "30px" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={event => this.handleChange(event)}
      />
      <span>{title}</span>
    </label>;
  }

  handleChange(event) {
    if ('function' === typeof this.props.onCheckedChange) {
      this.props.onCheckedChange(event.target.checked);
    }
  }

};
