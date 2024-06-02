import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Tooltip from "@mui/material/Tooltip";

const RegisterButton = () => {
  const navigate = useNavigate();
  const handleButton = (route: string) => {
    navigate(route);
  };
  return (
    <Tooltip title="Cadastrar novo endereço">
      <IconButton onClick={() => handleButton("/address-form")}>
        <AddLocationAltIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

export default RegisterButton;
