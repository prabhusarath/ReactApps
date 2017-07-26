import React from 'react';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

    }

    logReminders(){
        console.log('Stat now', this.state);
    }


    render() {
        return (
            <div className="App">
                <div className="title"> Prompt Pro </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Task to do .."
                               onChange={event => this.setState({text: event.target.value})}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                    onClick={() => this.logReminders()}> Add Task
                    </button>
                </div>
            </div>
        )
    }
}

export default App;