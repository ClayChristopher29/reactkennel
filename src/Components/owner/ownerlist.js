import React, { Component } from 'react'

class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            <h1>Owners</h1>
            {
                this.props.owners.map(owners =>
                    <div key={owners.id}>
                        <h5>{owners.name}</h5>
                        <h3>{owners.phone}</h3>
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList