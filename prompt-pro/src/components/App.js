import React from 'react';
import { connect } from 'react-redux';
import {addtask,deltask} from '../actions';
import {bindActionCreators} from 'redux';
import '../index.css';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

    }

    addReminders(){
        //console.log('Stat now', this.state);
        this.props.addtask(this.state.text);
    }

    delReminders(id){
        //console.log('Stat now', this.state);
        this.props.deltask(id);
    }

    renderReminders(){
        const { reminders }  = this.props;

        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map( rem => {
                        return (
                            <li key={rem.id} className="list-group-item ">
                                <div>{ rem.text }</div>
                                <div className="list-item delete-button"
                                     onClick={() => this.delReminders(rem.id)}>
                                &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }


    render() {
        return (
            <div className="App">
                <div className="title"> Prompt Pro </div>
                <div className="form-inline rem-form">
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Task to do .."
                               onChange={event => this.setState({text: event.target.value})}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-success"
                    onClick={() => this.addReminders()}> Add Task
                    </button>
                </div>
                { this.renderReminders() }
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
    return bindActionCreators({addtask,deltask},dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(App);