import React from "react";
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
const checkboxes = [
  { id: "sunday", text: "Sunday" },
  { id: "monday", text: "Monday" },
  { id: "tuesday", text: "Tuesday" },
  { id: "wednesday", text: "Wednesday" },
  { id: "thursday", text: "Thursday" },
  { id: "friday", text: "Friday" },
  { id: "saturday", text: "Saturday" }
];

class SearchResults extends React.Component {
  state = {
    selectedCheckboxes: []
  };

  
  onChange = id => {
    const selectedCheckboxes = this.state.selectedCheckboxes;

    // Find index
    const findIdx = selectedCheckboxes.indexOf(id);

    // Index > -1 means that the item exists and that the checkbox is checked
    // and in that case we want to remove it from the array and uncheck it
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(id);
    }

    this.setState({
      selectedCheckboxes: selectedCheckboxes
    });

    this.props.fetchAvailability(this.state.selectedCheckboxes)

  };
  render() {
    const { selectedCheckboxes } = this.state;
    return (
      <div className="App">
        {checkboxes.map(checkbox => (
          <label key={checkbox.id} style={{ display: 'block', marginBottom: 0, marginLeft: '40px' }}>
            <div className="row">
                <FormControlLabel 
                    color="primary"
                    control={<Checkbox color="primary" checked={selectedCheckboxes.includes(checkbox.id)} />}
                    onChange={() => this.onChange(checkbox.id)}
                    label={checkbox.text}
                    style={{ marginBottom: 0 }}
                />
            </div>
            {/* <Checkbox
              type="checkbox"
              onChange={() => this.onChange(checkbox.id)}
              checked={selectedCheckboxes.includes(checkbox.id)}
              label={<p>    {checkbox.text} </p>}
            /> */}
          </label>
        ))}
        {/* <p>Selected checkboxes: {JSON.stringify(selectedCheckboxes)}</p> */}
      </div>
    );
  }
}

export default SearchResults;
