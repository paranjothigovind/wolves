
import React from "react";

import {Checkbox} from './checkbox';


export class CheckboxGroup extends React.PureComponent {

  render() {
    return this.rewriteChildren(this.props.children);
  }

  /**
   * Iterates and rewrites children tree recursively
   */
  rewriteChildren(children) {
    return React.Children.map(children, (child, index) => {
      if (Checkbox === child.type) {
        if (this.isCheckboxBelongToGroup(child)) {
          return this.rewriteCheckbox(child);
        } else {
          return child;
        }
      } else if (child.props && child.props.children) {
        // Handling children of non-checkbox elements
        return React.cloneElement(child, {}, this.rewriteChildren(child.props.children));
      } else {
        // Do nothing for non-checkbox childless elements
        return child;
      }
    });
  }

  isCheckboxBelongToGroup(checkbox) {
    return !(
         (this.props.name && !checkbox.props.groupName)
      || (!this.props.name && checkbox.props.groupName)
      || (this.props.name !== checkbox.props.groupName)
    );
  }

  /**
   * Takes control over child checkbox
   */
  rewriteCheckbox(checkbox) {
    return React.cloneElement(checkbox, {
      checked: (-1 !== this.props.value.indexOf(checkbox.props.value)),
      onCheckedChange: value => this.onCheckboxCheckedChange(checkbox, value)
    });
  }

  /**
   * Updates the value when child checkbox state is changed
   */
  onCheckboxCheckedChange(checkbox, checked) {

    const checkboxValue = checkbox.props.value;
    const newValue = [...this.props.value];

    if (checked) {
      // Adding value to the list
      newValue.push(checkboxValue);
    } else {
      // Removing value from the list
      const index = newValue.indexOf(checkboxValue);
      if (-1 !== index) {
        newValue.splice(index, 1);
      }
    }

    // Notifying the caller about new value
    if ('function' === typeof this.props.onValueChange) {
      this.props.onValueChange(newValue);
    }

  }

};
