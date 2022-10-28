import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputText: '',
    };
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inputText) {
      this.props.addTask(this.state.inputText);
      this.setState({ inputText: '' });
    }
  }

  render() {
    return (
      <form>
        <label>
          <input
            id="task-add"
            type="text"
            placeholder="Add task..."
            onChange={this.handleChange}
            value={this.state.inputText}
          />
        </label>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
