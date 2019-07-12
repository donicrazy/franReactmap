import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getTrucks } from '../redux/action';
import MapContainer from './MapContainer';

class Map extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const { getTrucks, user, history } = this.props;
        if ( user ) {
            console.log("ids", user.ids);
            getTrucks(user.ids);
        }
        else {
            history.push('/login');
        }
    }
    render() {
        const { positions } = this.props;
        console.log(positions);
        return (
            <div>
                <MapContainer positions={positions}/>
            </div>
        )
    }
}

const maptDispatchToProps = {
    getTrucks,
}

const mapStateToProps = createStructuredSelector({
    positions: (state) => ( state.trucks.positions ),
    user: (state) => ( state.user.user ),
});

const withConnect = connect(mapStateToProps, maptDispatchToProps);
export default compose(withConnect)(Map);