import React from "react";
import {
  DirectionsService,
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
const Direction = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.MY_API_KEY}>
      <GoogleMap
        // required
        id="direction-example"
        // required
        mapContainerStyle={{
          height: "400px",
          width: "100%",
        }}
        // required
        zoom={2}
        // required
        center={{
          lat: 0,
          lng: -180,
        }}
        // optional
        onClick={this.onMapClick}
        // optional
        onLoad={(map) => {
          console.log("DirectionsRenderer onLoad map: ", map);
        }}
        // optional
        onUnmount={(map) => {
          console.log("DirectionsRenderer onUnmount map: ", map);
        }}
      >
        {this.state.destination !== "" && this.state.origin !== "" && (
          <DirectionsService
            // required
            options={{
              // eslint-disable-line react-perf/jsx-no-new-object-as-prop
              destination: this.state.destination,
              origin: this.state.origin,
              travelMode: this.state.travelMode,
            }}
            // required
            callback={this.directionsCallback}
            // optional
            onLoad={(directionsService) => {
              console.log(
                "DirectionsService onLoad directionsService: ",
                directionsService
              );
            }}
            // optional
            onUnmount={(directionsService) => {
              console.log(
                "DirectionsService onUnmount directionsService: ",
                directionsService
              );
            }}
          />
        )}

        {this.state.response !== null && (
          <DirectionsRenderer
            // required
            options={{
              // eslint-disable-line react-perf/jsx-no-new-object-as-prop
              directions: this.state.response,
            }}
            // optional
            onLoad={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onLoad directionsRenderer: ",
                directionsRenderer
              );
            }}
            // optional
            onUnmount={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onUnmount directionsRenderer: ",
                directionsRenderer
              );
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Direction;
