import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import MotionWrapper from "../components/MotionWrapper";

const Home = () => {
  const navigate = useNavigate();
  const handleButton = (route: string) => {
    navigate(route);
  };
  return (
    <MotionWrapper className="home-wrapper">
      <Logo />
      <div className="flex buttons-wrapper w-full justify-evenly">
        <Button
          variant="contained"
          color="primary"
          className="btn-custom"
          startIcon={<AddLocationAltIcon />}
          onClick={() => handleButton("/address-form")}
        >
          Cadastrar
          <br />
          endereço
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="btn-custom"
          startIcon={<EditLocationAltIcon />}
          onClick={() => handleButton("/address-edit")}
        >
          Editar
          <br />
          endereço
        </Button>
      </div>
    </MotionWrapper>
  );
};

export default Home;
