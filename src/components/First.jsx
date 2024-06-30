import { Card, CardContent, Typography, CardMedia, Grid, CardActions, Button, CssBaseline } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const First = () => {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setOutput(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <Navbar />
      
      <Typography variant="h5" textAlign="center" fontStyle="italic" fontFamily="monospace" gutterBottom>
        Shop.Enjoy.Live
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {output.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, padding: 2 }}>
              <CardMedia
                sx={{ height: 200, objectFit: 'contain' }}
                image={val.image}
                title={val.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {val.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {val.description.length > 100 ? `${val.description.substring(0, 100)}...` : val.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="contained" sx={{ marginRight: 1 }}>
                  Add to Cart
                </Button>
                <Button size="small" color="primary" variant="contained">
                  Shop Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default First;
