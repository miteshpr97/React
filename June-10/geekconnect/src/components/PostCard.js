import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

// import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function PostCard(props) {

  return (
    <Card sx={{ maxWidth: 520 }}>
      <CardHeader
        avatar={
          <Link to={`/profile/${props.singlePost?.owner?.id}`}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.singlePost?.owner?.picture} />
          </Link>

        }
        // title={`${props.singlePost?.owner?.firstName} ${props.singlePost?.owner?.lastName}`}
        title={<Link to={`/profile/${props.singlePost?.owner?.id}`}>
          {props.singlePost?.owner?.firstName} {props.singlePost?.owner?.lastName}
        </Link>}

        subheader={props.singlePost?.publishDate}
      />
      <CardMedia
        component="img"
        // height="194"
        image={props.singlePost?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.singlePost?.text}
        </Typography>

        <Stack direction="row" spacing={1} mt={1}>
          {props.singlePost?.tags?.map((singleTag, idx) => {
            return (
              <Link key={idx} to={`/search?q=${singleTag}`}>
              <Chip label={`#${singleTag}`} 
              variant="outlined" 
              size="small" style={{ textTransform: "capitalize" }}
               onClick={() => { }} />
               </Link>
            );
          })}

        </Stack>



      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="caption" display="block" gutterBottom>
          {props.singlePost?.likes} likes
        </Typography>
        <Link  to={`/post/:${props.singlePost?.id}`} style={{ marginLeft: "auto" }} >
        <IconButton  >
          <CommentIcon />
        </IconButton>
        </Link>
      </CardActions>

    </Card>
  );
}