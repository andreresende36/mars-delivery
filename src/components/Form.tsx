import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { Button } from "@mui/material";
import AlertComp from "./AlertComp";

interface FormProps {
  title?: string;
  buttonText?: string;
  buttonColor?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}
const Form: React.FC<FormProps> = ({
  title = "Formulário",
  buttonText = "Botão",
  buttonColor = "primary",
}) => {
  const {
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
    reset,
    setShowAlert,
    setWarningAlert,
  } = useContext(AppContext);

  useEffect(() => {
    if (editionLotNumber && addresses[editionLotNumber]) {
      const address = addresses[editionLotNumber];
      setRecipient(address.recipient);
      setLotNumber(editionLotNumber);
      setBuildingType(address.buildingType);
      setContactPhone(address.contactPhone);
      setDeliveryInstructions(address.deliveryInstructions);
      setPreferredDeliveryTime(address.preferredDeliveryTime);
      setSpaceLandmarks(address.spaceLandmarks);
      setSpaceSuitRecommendations(address.spaceSuitRecommendations);
      setLatitude(address.latitude);
      setLongitude(address.longitude);
    }
  }, [
    editionLotNumber,
    addresses,
    setRecipient,
    setLotNumber,
    setBuildingType,
    setContactPhone,
    setDeliveryInstructions,
    setPreferredDeliveryTime,
    setSpaceLandmarks,
    setSpaceSuitRecommendations,
    setLatitude,
    setLongitude,
  ]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (
      (Object.keys(addresses).includes(lotNumber) || lotNumber === "") &&
      editionLotNumber === ""
    ) {
      setWarningAlert(true);
      return null;
    }
    if (lotNumber) {
      setWarningAlert(false);
      const newAddress: { [key: string]: any } = {};
      newAddress[lotNumber] = {
        recipient: recipient,
        buildingType: buildingType,
        contactPhone: contactPhone,
        deliveryInstructions: deliveryInstructions,
        preferredDeliveryTime: preferredDeliveryTime,
        spaceLandmarks: spaceLandmarks,
        spaceSuitRecommendations: spaceSuitRecommendations,
        latitude: latitude,
        longitude: longitude,
      };
      await setAddresses({ ...addresses, ...newAddress });
      setShowAlert(true);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <span className="block text-neutral-700 text-3xl font-extrabold my-4">
        {title}
      </span>
      <div className="input-wrapper">
        {/* Destinatário */}
        <label className="label-wrapper">
          <span className="label">Destinatário</span>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            maxLength={100}
            required
            pattern="[\p{L}\s]+"
            className="input"
          />
        </label>

        {/* Número do Lote */}
        <label className="label-wrapper">
          <></>
          <span className="label">Número do Lote (4 dígitos)</span>
          <input
            type="text"
            value={lotNumber}
            onChange={(e) => setLotNumber(e.target.value)}
            maxLength={4}
            required
            pattern="[A-Za-z0-9]+"
            className={`input text-center font-semibold disabled:text-white disabled:bg-neutral-500 ${
              editionLotNumber !== "" ? "bg-neutral-600" : null
            }`}
            disabled={editionLotNumber !== ""}
          />
        </label>
      </div>

      {/* Coordenadas interplanetárias */}
      <label className="label-wrapper">
        <span className="label">Coordenadas interplanetárias</span>
        <div className="flex w-full">
          <label className="mr-4">
            <span className="block text-neutral-800 text-base">
              Latitude (-90 a 90)
            </span>
            <input
              type="number"
              name="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              min="-90"
              max="90"
              step="any"
              required
              className="input"
            />
          </label>
          <label>
            <span className="block text-neutral-800 text-base">
              Longitude (-180 a 180)
            </span>
            <input
              type="number"
              name="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              min="-180"
              max="180"
              step="any"
              required
              className="input"
            />
          </label>
        </div>
      </label>
      <label className="input-wrapper">
        {/* Tipo de edificação */}
        <label className="flex flex-col w-1/2">
          <span className="label">Tipo de edificação</span>
          <select
            value={buildingType}
            onChange={(e) => setBuildingType(e.target.value)}
            className="input"
          >
            <option value="">Selecione...</option>
            <option value="Armazém">Armazém</option>
            <option value="Fábrica">Fábrica</option>
            <option value="Base espacial">Base espacial</option>
            <option value="Colônia marciana">Colônia marciana</option>
            <option value="Estação de pesquisa">Estação de pesquisa</option>
          </select>
        </label>
        {/* Telefone */}
        <label className="flex flex-col w-1/2">
          <span className="label">Telefone</span>
          <input
            type="tel"
            name="phone"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            maxLength={15}
            required
            className="input text-center"
          />
        </label>
      </label>

      {/* Instruções de entrega */}
      <label className="label-wrapper">
        <span className="label">Instruções de entrega</span>
        <textarea
          value={deliveryInstructions}
          onChange={(e) => setDeliveryInstructions(e.target.value)}
          maxLength={500}
          className="input h-36"
        />
      </label>

      <div className="input-wrapper">
        {/* Horário preferido de entrega */}
        <label className="flex flex-col w-1/2">
          <span className="label">Horário preferido de entrega</span>
          <input
            type="time"
            value={preferredDeliveryTime}
            onChange={(e) => setPreferredDeliveryTime(e.target.value)}
            className="input"
          />
        </label>

        {/* Recomendações para Vestuário Espacial */}
        <label className="flex flex-col w-1/2">
          <span className="label">Recomendações para Vestuário Espacial</span>
          <select
            value={spaceSuitRecommendations}
            onChange={(e) => setSpaceSuitRecommendations(e.target.value)}
            className="input"
          >
            <option value="">Selecione...</option>
            <option value="Traje de Pressão">Traje de Pressão</option>
            <option value="Traje Térmico">Traje Térmico</option>
            <option value="Traje de Radiação">Traje de Radiação</option>
            <option value="Traje de Gravidade Reduzida">
              Traje de Gravidade Reduzida
            </option>
          </select>
        </label>
      </div>

      {/* Pontos de Referência Espaciais */}
      <label className="label-wrapper">
        <span className="label">Pontos de Referência Espaciais</span>
        <textarea
          value={spaceLandmarks}
          onChange={(e) => setSpaceLandmarks(e.target.value)}
          maxLength={500}
          className="input h-36"
        />
      </label>

      {/* Botão */}
      <div className="flex justify-center w-full my-3 relative">
        <Button
          variant="contained"
          size="large"
          color={buttonColor}
          className="h-16 w-2/6"
          onClick={handleSubmit}
        >
          {buttonText}
        </Button>
        <AlertComp />
        <AlertComp />
      </div>
    </form>
  );
};

export default Form;
