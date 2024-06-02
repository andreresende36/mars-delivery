import logo from "./assets/logo.png"

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({size = 400}) => {
  return (
    <img src={logo} alt="logo" width={size}/>
  )
}

export default Logo