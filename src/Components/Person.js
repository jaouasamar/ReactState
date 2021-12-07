import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default class Person extends Component {
  state = {
    fullName: "Samar Jaoua",
    bio: "Hi,I am a software engineer, actually i am studying Full Stack React/Node path",
    imgSrc:
      "https://cdn.shopify.com/s/files/1/0338/8961/6004/products/AMSQ_07_-_HONEYSUCKLE_SQUARE_1800x1800.jpg?v=1584087704",
    profession: "Full Stack Developper",
  };
  render() {
    return (
      <div>

    
    <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="250"
            image={this.state.imgSrc}
            alt="profile image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.state.fullName}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              {this.state.profession}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.state.bio}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
  
        </div>
  
    );
  }
}
