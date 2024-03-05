import './Home.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image_Organigrama from '../../assets/organigrama.jpg';
import Image_Establecimiento from '../../assets/establecimiento1.jpg';
import Image_Convocatoria from '../../assets/cubrir_cargo.jpg';
import Image_Padron from '../../assets/buscar_notebook.jpg';
import Image_Novedad from '../../assets/buscar_notebook2.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const redirigir = useNavigate();

  return (

    <div className='d-flex flex-wrap gap-3 mt-5 mb-5 justify-content-center align-items-center'>
       <Card sx={{ maxWidth: 250, boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Image_Organigrama}
        title="autoridades"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Autoridades
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Conozca como se conforma la estructura jerárquica y sus autoridades.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>redirigir('/autoridades')}>Leer Más</Button>
      </CardActions>
       </Card>   

       <Card sx={{ maxWidth: 250, boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Image_Establecimiento}
        title="establecimientos"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Establecimientos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Los centros educativos que conforman la Dirección de Educación son los siguientes
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>redirigir('/establecimientos')}>Leer Más</Button>
     </CardActions>
       </Card>  

       <Card sx={{ maxWidth: 250, boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Image_Convocatoria}
        title="convocatorias"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Convocatorias
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Las convocatorias para cubrir Cargos u Horas Cátedras en los distintos niveles.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>redirigir('/convocatorias')}>Leer Más</Button>
      </CardActions>
       </Card>  

       <Card sx={{ maxWidth: 250, boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Image_Padron}
        title="padrones"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Padrones
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Para acceder a los padrones provisorios y/o definitivos por los distintos niveles.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>redirigir('/padrones')}>Leer Más</Button>
      </CardActions>
       </Card>  

       <Card sx={{ maxWidth: 250, boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Image_Novedad}
        title="novedades"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Inscripción 2024
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Todo lo que necesitas conocer sobre el Proceso de Inscripción / Reinscripción 2024.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>redirigir('/novedades')}>Leer Más</Button>
      </CardActions>
       </Card>         
    </div>
  )
}

export default Home