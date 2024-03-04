import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Establecimientos() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='container d-flex flex-wrap gap-3 mt-5 mb-5'>
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader style={{backgroundColor: "#0A82B4", textAlign: "center" }} 
        title="Nivel Inicial"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          Escuela Municipal Alfonsina Storni<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          (Inicial y Primario)<br></br>
          Directora Prof. Claudia Suriano<br></br>
          Ricardo Rojas al 300 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4291244<p></p>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Jardín de infantes Municipal Espiguitas<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          Directora Prof. Patricia Juárez<br></br>
          Eugenio Méndez 375 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4525015<p></p>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Jardín de infantes Municipal Querubines<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          Lic. Verónica Garcia<br></br>
          Colombia 333 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4345637<p></p>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Jardín de infantes Municipal Semillitas<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          Directora Prof. Natalia Fanciotti<br></br>
          San Martín 1810 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4237480<p></p>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Jardín de infantes Municipal Ardillitas<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          Directora Prof. Patricia Juárez<br></br>
          Jujuy 4000 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4345637<p></p>
        </Typography>

      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 400 }}>
      <CardHeader style={{backgroundColor: "#F1EA10", textAlign: "center" }} 
        title="Nivel Primario"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          Escuela Municipal Alfonsina Storni<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          (Inicial y Primario)<br></br>
          Directora Prof. Claudia Suriano<br></br>
          Ricardo Rojas al 300 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4291244<p></p>
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Escuela Municipal y Cooperativa Gabriela Mistral - (Primario)<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          Directora Prof. Ana Maria Wierna<br></br>
          Mendoza 2176 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4327247<p></p>
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 400 }}>
      <CardHeader style={{backgroundColor: "#07C85F", textAlign: "center" }} 
        title="Nivel Secundario"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          Escuela Municipal Alfonsina Storni<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          (Secundario)<br></br>
          Directora Prof. María Graciela Calderón<br></br>
          Thomas Edison 321 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4525648<p></p>
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Escuela Municipal y Cooperativa Gabriela Mistral<br></br></Typography>
        <Typography variant="body2" color="text.secondary" padding={2}> 
          (Secundario)<br></br>
          Directora Prof. Hugo D'Angelis<br></br>
          Juan José Paso 167 - San Miguel de Tucumán<br></br>
          Teléfono: (0381) 4321435<p></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}


