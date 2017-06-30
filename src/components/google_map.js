import React, {Component} from 'react';

class GoogleMap extends Component {
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        //create embedded google map
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        //this.refs.map reference to the dom
        return <div ref="map" />
    }
}

export default GoogleMap