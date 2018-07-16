import React, {Component} from 'react'
import './Article.css'

class Article extends Component{
    render () {
        const {article} = this.props
        const body = <section className="article-text">{article.text}</section>
        return (
            <div className='article-body'>
                <h2 className="article-title">{article.title}</h2>
                {body}
            </div>
        )
    }
}


export default Article