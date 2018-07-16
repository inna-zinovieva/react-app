import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
// import ArticleList from './ArticleList/ArticleList'
import Article from './Article'
import articles from '../fixtures'
import Trip1 from "./Trip1/Trip1"
import Trip2 from "./Trip2/Trip2"
import Trip3 from "./Trip3/Trip3"
import Trip4 from "./Trip4/Trip4"
import Trip5 from "./Trip5/Trip5"
import Trip6 from "./Trip6/Trip6"
import './App.css'


function App () {
    return (
        <BrowserRouter>
            <div className='app-container'>
                <h1 className='app-title'>Around the world on a bike</h1>
                <ul>
                    <li className="article"><Link to='/trip1'><Article article = {articles[0]}/></Link></li>
                    <li><Link to='/trip2'><Article article = {articles[1]}/></Link></li>
                    <li><Link to='/trip3'><Article article = {articles[2]}/></Link></li>
                    <li><Link to='/trip4'><Article article = {articles[3]}/></Link></li>
                    <li><Link to='/trip5'><Article article = {articles[4]}/></Link></li>
                    <li><Link to='/trip6'><Article article = {articles[5]}/></Link></li>
                </ul>
        
                <Route exact path='/trip1' component={Trip1}/>
                <Route path='/trip2' component={Trip2}/>
                <Route path='/trip3' component={Trip3}/>
                <Route path='/trip4' component={Trip4}/>
                <Route path='/trip5' component={Trip5}/>
                <Route path='/trip6' component={Trip6}/>
            </div>
        </BrowserRouter>
    )
}
export default App