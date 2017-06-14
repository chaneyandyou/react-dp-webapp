import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { Button , Icon , Input} from 'antd';

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
               <div className="float-left header-left">
                   {this.props.cityName}
                   <Icon type="down" />
               </div>
               <div className="float-left header-middle">
                    <Icon type="search" className="input-icon"/>
                    <Input placeholder="请输入搜索内容" className="search-input"/>
               </div>
               <div className="header-right float-right">
                    <Icon type="user" />
               </div>
            </div>
        )
    }
}

export default HomeHeader