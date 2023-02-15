import React from 'react'
import './Css/Square.css'

class Square extends React.Component {
    render() {
        return (
            <td id={this.props.value} onClick={this.props.onclick}></td>
        )
    }
}

export default Square