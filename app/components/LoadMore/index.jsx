import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleClick(){
    this.props.handleFetchMoreData();
    }

    componentDidMount(){
        let timer;
        const wrapper = this.refs.wrapper;
        const loadMoreData = this.props.handleFetchMoreData;
        function callback(){
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if(top && top < windowHeight){
            
                loadMoreData();
            }
        
        }
        window.addEventListener("scroll",function(){
            if(this.props.isLoadingMore){
                return;
            }
            if(timer){
               clearTimeout(timer);
            }
            timer=setTimeout(callback,60);
        }.bind(this),false);

    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ?
                    <span>加载中...</span>
                    :
                    <span onClick={this.handleClick.bind(this)}>加载更多</span>
                }
            </div>
            
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
module.exports = LoadMore;