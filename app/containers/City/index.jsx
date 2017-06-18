import React from 'react'
import {hashHistory} from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfoAction'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    changeCity(newCity){
        let userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        localStore.setItem(CITYNAME, newCity);
        
        hashHistory.push('/');
    }

    render() {
        return (
            <div>
                <Header title="选择城市" />
                <CurrentCity cityName={this.props.userinfo.cityName} />
                <CityList changeFn={this.changeCity.bind(this)} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfoReducer
    }
}
function mapDispatchToProps(dispatch){
    return {
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);
