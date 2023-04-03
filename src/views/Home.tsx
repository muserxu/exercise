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
    title: 'Home 1',
    image:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    description: 'Description for card 1',
  },
  {
    id: 2,
    title: 'Home 2',
    image:
      'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg',
    description: 'Description for card 2',
  },
  {
    id: 3,
    title: 'Home 3',
    image:
      'https://cdn.pixabay.com/photo/2019/01/30/07/45/web-3963945__340.jpg',
    description: 'Description for card 3',
  },
  {
    id: 3,
    title: 'Home 4',
    image:
      'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_960_720.jpg',
    description: 'Description for card 4',
  },
];

function home() {
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

export default home;
