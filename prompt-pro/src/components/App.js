import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="title"> Prompt Pro </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Task to do .."
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"> Add Task
                    </button>
                </div>
            </div>
        )
    }
}

export default App;