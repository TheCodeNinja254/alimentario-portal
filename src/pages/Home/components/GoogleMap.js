import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
    };
    // binding this to event-handler functions
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClick = this.onMapClick.bind(this);
  }

  // onMarkerClick = (props, marker, e) => {
  //     this.setState({
  //         selectedPlace: props,
  //         activeMarker: marker,
  //         showingInfoWindow: true
  //     });
  // }
  // onMapClick = (props) => {
  //     if (this.state.showingInfoWindow) {
  //         this.setState({
  //             showingInfoWindow: false,
  //             activeMarker: null
  //         });
  //     }
  // }
  render() {
    const style = {
      width: 650,
      height: 890,
      borderRadius: 10,
      borderStyle: "solid",
      borderWidth: 4,
      marginTop: 50,
      borderColor: "#d2d2d2",
    };
    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: -1.206191, lng: 36.9943023 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title="Changing Colors Garage"
          position={{ lat: -1.206191, lng: 36.9943023 }}
          name="Changing Colors Garage"
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          google={this.props.google}
        >
          <Paper>
            <Typography variant="headline" component="h4">
              Changing Colors Garage
            </Typography>
            <Typography component="p">
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  api: process.env.REACT_APP_OOGLE_API_KEY,
})(GoogleMapsContainer);
