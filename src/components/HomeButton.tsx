import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const HomeButton = () => {
  const navigate = useNavigate();
  const handleButton = (route: string) => {
    navigate(route);
  };
  return (
    <Tooltip title="Página inicial">
      <IconButton onClick={() => handleButton("/")}>
        <HomeIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

export default HomeButton;
