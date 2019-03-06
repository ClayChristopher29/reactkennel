import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './locations/locationList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './owner/ownerlist'

class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]
    ownersFromApi=[
        {id:1, name:"Jack", phone:"304-555-5553"},
        {id:2, name:"Jill", phone:"304-555-5532"},
        {id:3, name:"Bill", phone:"304-555-3234"},
        {id:4, name:"Tim", phone:"redacted"},
        {id:5, name:"Marie", phone:"304-333-3215"},
        {id:6, name:"Kelley", phone:"304-555-9875"}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromApi
    }

    render() {
        return (
            <div className="container">
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animal" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/Employee" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owner" render={(props) =>{
                    return <OwnerList owners={this.state.owners}/>
                }}/>
            </div>
        )
    }
}

export default ApplicationViews