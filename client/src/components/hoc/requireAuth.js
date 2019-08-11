import React,{Component} from 'react';
import {connect} from 'react-redux';
export default (ChildComponent) => {
    class RequiredAuth extends Component {

        componentDidMount() {
            if(!this.props.user) {
                this.props.history.push('/')
            }
        }
        componentDidUpdate() {
            if(!this.props.user) {
                this.props.history.push('/')
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }
    const mapStateToProps = (state) => {
        return {
            user: state.auth.user
        }
    }

    return connect(mapStateToProps)(RequiredAuth);
}