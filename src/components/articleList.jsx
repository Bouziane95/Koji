import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../style/articleList.css'

export default class articleList extends Component {
    constructor(props){
        super(props);
        this.state={
            listArticle: [],
            error:"",
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((apiRes) => {
            this.setState({listArticle: apiRes.data})
        }).catch((error) => {
            console.log(error)
            this.setState({
                error:"Error with Data !"
            })
        })
    }

    render() {
        const {listArticle, error} = this.state
        return (
            <div>
                <h1>Article List</h1>
                {listArticle.length ? listArticle.map((article) => (
                    <div key={article.id}>
                        <Link className="link" to={() => `/article/${article.id}`}>
                        {article.title}
                        </Link>
                    </div>
                )) : null}
                {error ? <div>{error}</div> :null}
            </div>
        )
    }
}
