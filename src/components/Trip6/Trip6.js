import React, {Component} from 'react'
import trips from '../trips'
import '../Trip.css'

class Trip1 extends Component{
    render () {
        return (
            <div className='trip-body'>
                <h2 className="trip-title">{trips[5].title}</h2>
                <div className="wrapper">
                    <div className="trip-text"><span>About trip: </span>{trips[5].text}</div>
                    <div className="trip6-img trip-img"></div>
                    </div>
                <p className="trip-distance"><span>Distance: </span>{trips[5].distance}</p>
                <p className="trip-averageSpeed"><span>Average speed: </span>{trips[5].averageSpeed}</p>
            </div>
        )
    }
}

export default Trip1