import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detail.js'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        const result = getInfoData(this.props.id);
        console.log(result);
    }
    render() {
        return (
            <div>
                {this.props.id}
            </div>
        )
    }
}


module.exports = Info;