import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            categoryIndex:0
        }
    }

    render() {
        let options = {
            auto: 2000,
            callback: (index)=>{
                this.setState({categoryIndex:index});
            }
        };
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={options}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
                {this.state.categoryIndex}
            </div>
        )
    }
}

module.exports = Category