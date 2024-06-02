import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import Tooltip from "@mui/material/Tooltip";

const EditButton = () => {
  const navigate = useNavigate();
  const handleButton = (route: string) => {
    navigate(route);
  };
  return (
    <Tooltip title="Editar endereço">
      <IconButton
        onClick={() => handleButton("/address-edit")}
      >
        <EditLocationAltIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

export default EditButton;
