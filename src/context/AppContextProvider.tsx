import React, { useEffect, useState } from "react";
import AppContext from './AppContext';

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [addresses, setAddresses] = useState({})
  const [recipient, setRecipient] = useState("");
  const [lotNumber, setLotNumber] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [preferredDeliveryTime, setPreferredDeliveryTime] = useState("");
  const [spaceLandmarks, setSpaceLandmarks] = useState("");
  const [spaceSuitRecommendations, setSpaceSuitRecommendations] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [editionLotNumber, setEditionLotNumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [warningAlert, setWarningAlert] = useState(false);

  const reset = () => {
    setRecipient("")
    setLotNumber("")
    setBuildingType("")
    setContactPhone("")
    setDeliveryInstructions("")
    setPreferredDeliveryTime("")
    setSpaceLandmarks("")
    setSpaceSuitRecommendations("")
    setLatitude(0)
    setLongitude(0)
    setEditionLotNumber("")
  }

  useEffect(() => {
    const savedAddresses = localStorage.getItem("addresses");
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const addressContextValue = {
    addresses,
    setAddresses,
    recipient,
    setRecipient,
    lotNumber,
    setLotNumber,
    buildingType,
    setBuildingType,
    contactPhone,
    setContactPhone,
    deliveryInstructions,
    setDeliveryInstructions,
    preferredDeliveryTime,
    setPreferredDeliveryTime,
    spaceLandmarks,
    setSpaceLandmarks,
    spaceSuitRecommendations,
    setSpaceSuitRecommendations,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    editionLotNumber,
    setEditionLotNumber,
    showAlert,
    setShowAlert,
    warningAlert,
    setWarningAlert,
    reset
  };

  return (
    <AppContext.Provider value={addressContextValue}>
      {children}
    </AppContext.Provider>
  );
};