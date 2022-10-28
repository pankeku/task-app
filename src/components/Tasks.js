import React from 'react';

class Tasks extends React.Component {

  render() {
    const listItems = this.props.tasks.map((task, index) => <li key={index + 1}>{task}</li>);
    return (
      <div>
        <p>Tasks</p>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Tasks;
