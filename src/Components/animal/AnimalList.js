import React, { Component } from 'react'

class AnimalList extends Component{
    render (){
        return (
            <section className="animals">
            <h1>Pets for Adoption</h1>
            {

                this.props.animals.map(animals=>
                    <div key={animals.id}>
                    <h3>{animals.name}</h3>
                    <h5>{animals.breed}</h5>
                    </div>
                )
            }


            </section>
        )
    }
}
export default AnimalList;