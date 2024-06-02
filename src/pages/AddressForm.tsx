import Form from "../components/Form";
import Logo from "../components/Logo";
import HomeButton from "../components/HomeButton";
import EditButton from "../components/EditButton";
import MotionWrapper from "../components/MotionWrapper";
import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const AddressForm = () => {
  const { reset, setEditionLotNumber, setShowAlert, setWarningAlert } = useContext(AppContext)
  useEffect(() => {
    reset()
    setEditionLotNumber("")
    setShowAlert(false)
    setWarningAlert(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MotionWrapper className="wrapper">
      <div className="w-full text-right">
        <EditButton />
        <HomeButton />
      </div>
      <Logo size={300}/>
      <Form
        title="Cadastro de novo endereço de entrega"
        buttonText="Cadastrar"
      />
    </MotionWrapper>
  );
};

export default AddressForm;
