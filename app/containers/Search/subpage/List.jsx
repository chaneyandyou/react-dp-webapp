import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home.js'
import HomeList from '../../../components/HomeList'
import LoadMore from '../../../components/LoadMore'

// 初始化一个组件的 state
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
};

class SearchList extends React.Component {
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
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getListData(cityName,page,keyword,category);
        this.handleResultData(result);
    }

    handleFetchMoreData(){
        this.setState({
            isLoadingMore:true
        });
        const cityName = this.props.cityName;
        const nextPage = this.state.nextPage;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getListData(cityName,nextPage,keyword,category);
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

    // 处理重新搜索
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword;
        const category = this.props.category;

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState);

        // 重新加载数据
        this.fetchFirstData()
    }

    render() {
        return (
            <div>
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

module.exports = SearchList;