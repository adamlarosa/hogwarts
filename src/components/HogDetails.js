import React from 'react'

class HogDetails extends React.Component {

    render(){
        const { hog } = this.props.data
        return (
            <div>
                Specialty: {hog.specialty}<br/>
                Greased: {`${hog.greased}`}<br/>
                Weight : {hog.weight} lbs<br/>
                Highest Medal Achieved: {hog['highest medal achieved']}
            </div>
        )
    }
}
export default HogDetails