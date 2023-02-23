import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cardCss = {
  maxWidth: 345,
  backgroundColor: "dodgerblue",
};

const CustomCard = ({ imgSrc, imgTitle, productTitle, productPrice }) => {
  return (
    <Card sx={cardCss} raised={true}>
      <CardMedia sx={{ height: 140 }} image={imgSrc} title={imgTitle} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productTitle}
        </Typography>
        <Typography
          variant="body2"
          // color="text.secondary"
          sx={{ color: "green", fontSize: "20px", fontWeight: "800" }}
        >
          {productPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <input type="text" />
        </div>
        <Button size="small" variant="contained">
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
