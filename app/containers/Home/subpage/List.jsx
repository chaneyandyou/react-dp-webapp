import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {getListData} from '../../../fetch/home/home.js'
import HomeList from '../../../components/HomeList'
import LoadMore from '../../../components/LoadMore'

class List extends React.Component {
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
        const cityName = this.props.cityName;
        const page = 0;
        const result = getListData(cityName,page);
        this.handleResultData(result);
    }

    handleFetchMoreData(){
        this.setState({
            isLoadingMore:true
        });
        const cityName = this.props.cityName;
        const nextPage = this.state.nextPage;
        const result = getListData(cityName,nextPage);
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
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ?
                    <HomeList data={this.state.data}/>
                    :
                    <div>加载中...</div>
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

module.exports = List;