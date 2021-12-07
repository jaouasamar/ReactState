import React, { Component } from 'react'

export default class TimeInterval extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             
        }
    }
    componentDidMount=()=>
    { setInterval(() => {
        this.setState({count:this.state.count+1})
    }, 1000);
       
    }
    componentDidUpdate() {
        console.log(this.state.count)
    }
    componentWillUnmount() {
        clearInterval(this.state.count)
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}
