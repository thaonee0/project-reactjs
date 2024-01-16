import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        alert('click modal toggle');
    }

    render() {
        console.log('Check child props', this.props);
        console.log('Check child open modal', this.props.isOpen)
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => {this.toggle()}} className={'hi'}>
            <ModalHeader toggle={() => {this.toggle()}}>Modal title</ModalHeader>
            <ModalBody>
                meo
            </ModalBody>
            <ModalFooter>
                <button color="primary" onClick={() => {this.toggle()}}>A</button>{''}
                <button color="secondary" onClick={() => {this.toggle()}}>B</button>
            </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


