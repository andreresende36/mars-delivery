import Form from "../components/Form";
import Logo from "../components/Logo";
import HomeButton from "../components/HomeButton";
import MotionWrapper from "../components/MotionWrapper";
import RegisterButton from "../components/RegisterButton";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Tooltip } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import AppContext from "../context/AppContext";
import AlertComp from "../components/AlertComp";

const AddressEdit = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { reset, editionLotNumber, setEditionLotNumber,setWarningAlert, setShowAlert } = useContext(AppContext);

  const handleButton = (reset: boolean) => {
    if (reset) setEditionLotNumber("");
    setIsEnabled(!isEnabled);
  };

  useEffect(() => {
    reset()
    setEditionLotNumber("")
    setWarningAlert(false)
    setShowAlert(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsEnabled(false);
  }, [editionLotNumber]);

  const searchInput = () => {
    return (
      <label className="flex flex-col justify-center items-center">
        <AlertComp className="top-2 w-fit" opacity={1} />
        <span className="text-white text-2xl font-semibold mb-3">
          Digite o lote do endereço que deseja editar
        </span>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="text"
            required
            pattern="[A-Za-z0-9]+"
            value={editionLotNumber}
            onChange={(e) => setEditionLotNumber(e.target.value)}
            maxLength={4}
            className="input text-center text-5xl h-20 w-48"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleButton(false);
              }
            }}
          />
          <IconButton
            sx={{ transform: "scale(1.8)" }}
            onClick={() => handleButton(false)}
          >
            <SearchIcon
              sx={{
                color: "white",
                filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))",
                transform: "scale(1.5)",
              }}
            />
          </IconButton>
        </div>
      </label>
    );
  };

  return (
    <MotionWrapper className={isEnabled ? "wrapper" : "edit-wrapper"}>
      <div
        className={`w-full ${isEnabled ? "flex justify-between" : "text-end"}`}
      >
        {isEnabled ? (
          <div>
            <IconButton onClick={() => handleButton(true)}>
              <Tooltip title="Pesquisar outro endereço">
                <ReplyIcon fontSize="large" sx={{ color: "white" }} />
              </Tooltip>
            </IconButton>
          </div>
        ) : null}
        <div>
          <RegisterButton />
          <HomeButton />
        </div>
      </div>
      {isEnabled ? <Logo size={300}/> : <Logo />}

      {isEnabled ? (
        <MotionWrapper className="w-full">
          <Form
            title={`Edição do endereço de lote número ${editionLotNumber}`}
            buttonText="SALVAR EDIÇÃO"
            buttonColor="secondary"
          />
        </MotionWrapper>
      ) : (
        <MotionWrapper className="w-full">{searchInput()}</MotionWrapper>
      )}
    </MotionWrapper>
  );
};

export default AddressEdit;
