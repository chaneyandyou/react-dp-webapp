import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Icon , Input} from 'antd';
import {Link} from 'react-router'
import { hashHistory } from 'react-router'
import SearchInput from '../SearchInput'


class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          searchValue:''
        };
    }

    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
               <Link to='/city' style={{color:"#fff"}}>
                    <div className="float-left header-left">
                        {this.props.cityName}
                        <Icon type="down" />
                    </div>
               </Link>
               <div className="float-left header-middle">
                    <Icon type="search" className="input-icon"/>
                    <SearchInput
                        value={this.state.searchValue}
                        enterHandle={this.enterHandle.bind(this)}
                    />
               </div>
                <Link to="/login" style={{color:"#fff"}}>
                    <div className="header-right float-right">
                        <Icon type="user" />
                    </div>
                </Link>
            </div>
        )
    }
}

export default HomeHeader