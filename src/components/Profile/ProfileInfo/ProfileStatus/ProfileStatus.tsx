import React, {ChangeEvent, useState} from "react";
import s from './ProfileStatus.module.css'

type PropsType = {
    status: any
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode(){
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
};
