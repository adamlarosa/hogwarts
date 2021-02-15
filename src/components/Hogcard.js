import React, { Component } from 'react'
import HogDetails from './HogDetails'

//begin waste of time
import augustus from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy from '../hog-imgs/galaxy_note.jpg'
import leggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggie from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import raimbow from '../hog-imgs/rainbowdash.jpg'
import sober from '../hog-imgs/sobriety.jpg'
import prosciutto from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffle from '../hog-imgs/truffleshuffle.jpg'
//end waste

class Hogcard extends Component {
    constructor() {
        super();
        this.state = {
            details: false
        }
    } 
    
    imageName = {
        'Augustus Gloop': augustus,
        'Bay of Pigs': bay_of_pigs,
        'Cherub': cherub, 
        'Galaxy Note': galaxy,
        'Leggo My Eggo': leggo,
        'Mudblood': mudblood,
        'Piggy smalls': piggie,
        'Porkchop': porkchop, 
        'Rainbowdash': raimbow,
        'Sobriety': sober, 
        'The Prosciutto Concern': prosciutto,
        'Trouble': trouble, 
        'TruffleShuffle': truffle 
    }
 
    drawDetails = () => {
        if (this.state.details === false){
            this.setState({ 
                details: true
            })
        } else {
            this.setState({
                details: false
            })
        }
    }

    render() {
        const { hog } = this.props
        const { details } = this.state
        return (
            <div onClick={this.drawDetails} className='ui four wide column'>
                {hog.name}<br/>                                  {/* display name */}
                {details && <HogDetails data={this.props}/>} {/* dynamicly display details*/}
                <img src={this.imageName[hog.name]} alt="" />    {/* display pic*/}
            </div>
        )
    }
}

export default Hogcard