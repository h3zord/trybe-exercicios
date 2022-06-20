import React from 'react';
import ProtoTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {

        const {name, type, image} = this.props.pokemon;
        const {value, measurementUnit} = this.props.pokemon.averageWeight;

        return (
            <div className='main-container'>
                <div className='info-container'>
                    <p>
                        {name}
                    </p>
                    <p>
                        {type}
                    </p>
                    <p>
                    averageWeight: {value}{measurementUnit}
                    </p>
                </div>
                <div className='img-container'>
                    <img src={image} alt=''></img>
                </div>
            </div>
        )
    }
}

Pokemon.ProtoTypes = {
    name: ProtoTypes.string,
    type: ProtoTypes.string,
    image: ProtoTypes.string,
    value: ProtoTypes.number,
    measurementUnit: ProtoTypes.string,
}

export default Pokemon;