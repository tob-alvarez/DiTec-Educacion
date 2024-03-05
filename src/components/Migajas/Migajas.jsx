/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';


export default function Migajas({componente}) {

    const redirigir = useNavigate()
    function handleClick() {
      redirigir('/home')
    }


    return (
    <div role="presentation" className='mb-4' >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          onClick={handleClick}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          {componente}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}