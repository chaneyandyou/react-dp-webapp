import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Icon} from 'antd'
import './style.less'
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    clickHandle() {
        window.history.back();
    }

    render() {
        return (
            <div id="header" className="clear-fix">

                <div className="float-left header-left" onClick={this.clickHandle.bind(this)}>
                    <Icon type="left"/>
                </div>

                <div className="float-left header-middle">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="header-right float-right">

                </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
module.exports = Header;