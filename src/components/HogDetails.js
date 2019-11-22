import React from 'react'

class HogDetails extends React.Component {

    render(){

        return (
            <div>
                Specialty: {this.props.data.hog.specialty}<br/>
                Greased: {`${this.props.data.hog.greased}`}<br/>
                Weight : {this.props.data.hog.weight} lbs<br/>
                Highest Medal Achieved: {this.props.data.hog['highest medal achieved']}
            </div>
        )
    }
 
}
export default HogDetails