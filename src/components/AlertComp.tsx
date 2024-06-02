import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { Alert } from "@mui/material";

interface AlertProps {
  className?: string;
  opacity?: number;
}

const AlertComp: React.FC<AlertProps> = ({
  className = "w-fit",
  opacity = 0.8,
}) => {
  const { showAlert, setShowAlert, warningAlert, setWarningAlert, lotNumber } =
    useContext(AppContext);
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (showAlert | warningAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
        setWarningAlert(false);
      }, 3500);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAlert, warningAlert]);
  const alertVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: opacity,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={alertVariants}
      initial="hidden"
      animate={showAlert | warningAlert ? "visible" : "exit"}
      exit="exit"
      className={className}
      style={{
        position: "absolute",
        marginTop: "-5rem",
        transform: "translate(-50%, -50%)",
      }}
    >
      {showAlert && (
        <Alert variant="filled" severity="success" className="text-center">
          Dados salvos com sucesso!
        </Alert>
      )}
      {warningAlert && (
        <Alert variant="filled" severity="warning" className="text-center">
          {lotNumber ? "Número de lote já tem cadastro!" : "Digite um número de lote válido!"}
        </Alert>
      )}
    </motion.div>
  );
};

export default AlertComp;
