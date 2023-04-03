import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Post from '../components/Post';

const cardData = [
  {
    id: 1,
    title: 'Game 1',
    image:
      'https://cdn.pixabay.com/photo/2017/09/08/20/29/chess-2730034_960_720.jpg',
    description: 'Description for card 1',
  },
  {
    id: 2,
    title: 'Game 2',
    image:
      'https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_960_720.jpg',
    description: 'Description for card 2',
  },
  {
    id: 3,
    title: 'Game 3',
    image:
      'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_960_720.jpg',
    description: 'Description for card 3',
  },
];

function Game() {
  return (
    <div>
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-evenly',
        }}
      >
        {cardData.map((card) => (
          <Post
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </List>
    </div>
  );
}

export default Game;
