import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Cards({title,image ,desc}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title.length > 20 ? title.substring(0,25)+"..." : title}
          </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  {desc.length > 100 ? desc.substring(0, 100) + "..." : desc}
</Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
