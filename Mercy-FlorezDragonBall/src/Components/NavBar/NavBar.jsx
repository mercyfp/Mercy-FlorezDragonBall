import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">HomePage</Button>
        </Link>
        <Link to={"/character/Alien"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Humano</Button>  
        </Link>
        <Link to={"/character/Human"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">No Humanos</Button>
        </Link>
        <Link to={"/details"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Acerca de</Button>
        </Link>
    </nav>
  )
}

export default NavBar