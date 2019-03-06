import React, {Component} from 'react';

class LocationList extends Component {
    render() {
        return (
            <section className="Locations">
            <h1>Locations</h1>
            {
                this.props.locations.map(locations =>
                    <div key={locations.id}>
                       <h3>{locations.name}</h3>
                        <h5>{locations.address}</h5>
                    </div>
                )
            }
            </section>
        )
    }
}
export default LocationList;