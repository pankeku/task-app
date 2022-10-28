import React from 'react';
import Form from './Form';
import Tasks from './Tasks';

class Overview extends React.Component {
    constructor () {
        super();
        this.state = {
            tasks: ['walk', 'do', 'go'],
        }

        this.addTask = (task) => this.setState(prevState => ({tasks: [...prevState.tasks, task]}));        
    }

    render() {
        return  (
            <div>
                <Form inputText={this.state.inputText} addTask={this.addTask}/>
                <Tasks tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Overview;