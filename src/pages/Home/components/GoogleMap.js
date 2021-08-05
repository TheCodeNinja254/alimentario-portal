import React from "react";
import {GoogleApiWrapper, Map} from "google-maps-react";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showingInfoWindow: false,
      // activeMarker: {},
    };
    // binding this to event-handler functions
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClick = this.onMapClick.bind(this);
  }

  // onMarkerClick(props, marker) {
  //   this.setState({
  //     // selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true,
  //   });
  // }

  // onMapClick() {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null,
  //     });
  //   }
  // }

  render() {
    // const style = {
    //   width: 650,
    //   height: 890,
    //   borderRadius: 10,
    //   borderStyle: "solid",
    //   borderWidth: 4,
    //   marginTop: 50,
    //   borderColor: "#d2d2d2",
    // };
    return (
      <Map
        item
        xs={12}
        // style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: -1.2591667, lng: 36.7836446 }}
      >
        {/* <Marker */}
        {/*  onClick={this.onMarkerClick} */}
        {/*  title="Safaricom House, Waiyaki Way" */}
        {/*  position={{ lat: -1.2591667, lng: 36.7836446 }} */}
        {/*  name="Safaricom House, Waiyaki Way" */}
        {/* /> */}
        {/* <InfoWindow */}
        {/*  marker={this.state.activeMarker} */}
        {/*  visible={this.state.showingInfoWindow} */}
        {/* > */}
        {/*  <Paper> */}
        {/*    <Typography variant="headline" component="h4"> */}
        {/*      Safaricom House, Waiyaki Way */}
        {/*    </Typography> */}
        {/*    <Typography component="p"> */}
        {/*      Safaricom House, Waiyaki Way <br /> */}
        {/*      -1.2591667, 36.7836446 */}
        {/*    </Typography> */}
        {/*  </Paper> */}
        {/* </InfoWindow> */}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_OOGLE_API_KEY,
})(GoogleMapsContainer);
