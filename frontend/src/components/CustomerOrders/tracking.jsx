import React, { useEffect, useState } from "react";
import axios from "axios";

const Tracking = () => {
  const [uuid, setUuid] = useState(null);
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwMzQ2YjFiMC1kYjk4LTExZWQtYTI0Ny05MzNiNGM1ODNjOTQiLCJzdWJJZCI6IjY0M2FiMTkxMWE3MGY0N2JiYTAxNGNiMyIsImlhdCI6MTY4MTU2ODE0NX0.ByArH8nDjqzyi56ChkFbxBPCoEsjssWSXIoT5gkSK78";
    const trackingUrl = "https://parcelsapp.com/api/v3/shipments/tracking";
    const shipments = [
      {
        trackingId: "92001901755477300210710061",
        language: "en",
        country: "United States",
      },
      // ...
    ];

    const initiateTracking = async () => {
      try {
        const response = await axios.post(trackingUrl, { apiKey, shipments });
        const { uuid } = response.data;
        setUuid(uuid);
      } catch (error) {
        console.error(error);
      }
    };

    initiateTracking();
  }, []);

  useEffect(() => {
    const checkTrackingStatus = async () => {
      try {
        const response = await axios.get(
          `https://parcelsapp.com/api/v3/shipments/tracking?uuid=${uuid}&apiKey=APIKEY`
        );
        const { done } = response.data;
        if (done) {
          console.log("Tracking complete");
          console.log(response.data);
          setTrackingData(response.data);
          setIsLoading(false);
        } else {
          console.log("Tracking in progress...");
          setTimeout(checkTrackingStatus, 1000);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (uuid) {
      checkTrackingStatus();
    }
  }, [uuid]);

  return (
    <div>
      <h2>Tracking</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>Status: {trackingData.status}</p>
          <p>Location: {trackingData.location}</p>
          {/* render other tracking information here */}
        </div>
      )}
    </div>
  );
};

export default Tracking;
