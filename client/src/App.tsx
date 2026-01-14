import { List, ListItem } from '@mui/material';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Typography from '@mui/material/Typography/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:7003/api/activities')
      .then(response => setActivities(response.data));
  }, []);

  return (
    <>
      <Typography variant='h3' style={{color: 'red'}}>Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
