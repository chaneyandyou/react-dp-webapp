import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Input } from 'antd';

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value:''
        }
    }

    componentDidMount(){
        this.setState({
            value:this.props.value || ''
        });
    }

    handleChange(e){
        let newValue = e.target.value;
        this.setState({
            value:newValue
        });
    }

    handleKeyUp(e){
        if(e.keyCode !== 13){
            return;
        }
        this.props.enterHandle(this.state.value);
    }

    render() {
        return (
            <Input
                type="text"
                className='search-input'
                placeholder='请输入搜索内容'
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onKeyUp={this.handleKeyUp.bind(this)}
            />
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = SearchInput;