import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import * as collectActionsFromFile from '../../../actions/collect'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore:false
        }
    }
    componentDidMount() {
        this.checkCollect();

    }
    //鉴别是否收藏了
    checkCollect(){
        const id = this.props.id;
        const collect = this.props.collect;

        collect.some(item => {
            if (item.id === id) {
                // 已经被收藏
                this.setState({
                    isStore: true
                });
                // 跳出循环
                return true
            }
        })
    }
    //购买
    buyHandle(){
        console.log("buyHandle");
        const loginCheck = this.loginCheck();
        if(!loginCheck){
            return
        }
        
        hashHistory.push('/User');
    }
    //收藏
    storeHandle(){
        console.log("storeHandle");
        const loginCheck = this.loginCheck();
        if(!loginCheck){
            return
        }
        const id = this.props.id;
        const collectActions = this.props.collectActions;
        if(this.state.isStore){
            collectActions.remove({id:id});
        }else{
            collectActions.add({id:id});
        }
        this.setState({
            isStore:!this.state.isStore
        });
    }
    //验证登陆
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if(!userinfo.username){
            hashHistory.push('/login/' + encodeURIComponent('/detail/' + id));
            return false;
        }
    }

    render() {
        return (
            <BuyAndStore
                isStore={this.state.isStore}
                buyHandle={this.buyHandle.bind(this)}
                storeHandle={this.storeHandle.bind(this)}
            />
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfoReducer,
        collect:state.collect
    }
}
function mapDispatchToProps(dispatch){
    return {
        collectActions:bindActionCreators(collectActionsFromFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);