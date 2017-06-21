import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfoAction'
import { hashHistory } from 'react-router'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }

    componentDidMount() {
        this.isCheck();
    }

    isCheck(){
        const userinfo = this.props.userinfo;
        if(userinfo.username){  //登陆状态
            let userPage = '/User';
            this.redirectPage(userPage);
        }else{  //未登陆状态
            this.setState({
                checking:false
            });
        }
    }

    redirectPage(router){
        hashHistory.push(router);
    }

    loginHandle(username){
        const action = this.props.userInfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        action.update(userinfo);
        
        const router = this.props.params.router;
        if(router){
            hashHistory.push(router);
        }else {
            const userPage = '/User';
            hashHistory.push(userPage);
        }
    }

    render() {
        return (
            <div>
                <Header title="登陆页面"/>
                {
                    this.state.checking
                        ?
                        <div>等待中...</div>
                        :
                        <LoginComponent loginHandle={this.loginHandle.bind(this)}/>

                }
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfoReducer
    }
}
function mapDispatchToProps(dispatch) {
    return{
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)