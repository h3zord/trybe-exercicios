import React from "react";
import data from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        return (
            
            data.map((element) => <Pokemon pokemon={element} key={element.id}/>)
        )
    }
}

export default Pokedex;