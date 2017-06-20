import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detail'

import ListComponent from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[],
            hasMore:false,
            isLoadingMore:false,
            nextPage:1,
        }
    }

    componentDidMount() {
        this.fetchFirstData();
    }

    fetchFirstData(){
        const id = this.props.id;
        const page = 0;
        const result = getCommentData(id,page);
        this.handleResultData(result);
    }

    handleFetchMoreData(){
        this.setState({
            isLoadingMore:true
        });
        const id = this.props.id;
        const nextPage = this.state.nextPage;
        const result = getCommentData(id,nextPage);
        this.handleResultData(result);

        this.setState({
            nextPage:nextPage+1
        });
    }

    handleResultData(result){
        result.then(res=>{
            return res.json();
        }).then(json=>{
            const hasMore = json.hasMore;

            const data = json.data;
            this.setState({
                data:this.state.data.concat(data),
                hasMore:hasMore,
                isLoadingMore:false
            });

        })
    }
    
    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                        ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} handleFetchMoreData={this.handleFetchMoreData.bind(this)}/>
                        :
                        ''
                }
            </div>
        )
    }
}

export default Comment