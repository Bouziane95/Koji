import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"



export default class article extends Component {

    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            title:"",
            body:"",
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts/" + this.state.id).then((apiRes) =>{
            console.log(apiRes)
            this.setState({
                title: apiRes.data.title,
                body:apiRes.data.body
            });
        }).catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        const {id, title, body} = this.state;
        return (
            <div>
                <h1>Article n° {id}</h1>
                <h2>{title}</h2>
                <p>{body}</p>
                <Link to = "/">
                    <button>Back</button>
                </Link>
            </div>
        )
    }
}
