import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Icon} from 'antd'
import './style.less'
import SearchInput from '../SearchInput'
import { hashHistory } from 'react-router'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    clickHandle(){
        window.history.back();
    }

    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }

    render() {
        return (
            <div id="SearchHeader" className="clear-fix">

                <div className="float-left header-left" onClick={this.clickHandle.bind(this)}>
                    <Icon type="left"/>
                </div>

                <div className="float-left header-middle">
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = SearchHeader;