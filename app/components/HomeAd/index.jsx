import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <h2 style={{        
                    fontSize: "16px",
                    fontWeight: "700",
                    padding: "10px 15px",
                    borderBottom: "1px solid #f1f1f1",
                    }}
                >超值特惠</h2>
                <div className="clear-fix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="float-left" style={{width: "33.3%",
        height: "140px"}}>
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title} style={{width: "100%",
            height: "100%"}}/>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd