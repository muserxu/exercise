import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CardActions,
  IconButton,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface PostProps {
  image: string;
  title: string;
  description: string;
}

function Post(props: PostProps) {
  const [open, setOpen] = useState(false);

  const [heart, setHeart] = useState(false);

  const handleHeart = () => {
    setHeart(!heart);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        sx={{ width: 345, height: 300, marginRight: 2 }}
        onClick={handleOpen}
      >
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        {/* <DialogContent> */}
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="500"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites" onClick={handleHeart}>
              {heart ? (
                <FavoriteIcon style={{ color: '#FF0000' }} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          </CardActions>
        </Card>
        {/* </DialogContent> */}
        {/* <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}

export default Post;
