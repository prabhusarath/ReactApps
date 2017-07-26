import React from 'react';
import { connect } from 'react-redux';
import {addtask} from '../actions';
import {bindActionCreators} from 'redux';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

    }

    logReminders(){
        //console.log('Stat now', this.state);
        this.props.addtask(this.state.text);
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

function mapStateToProps(state){
    return{
        reminders: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addtask},dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(App);