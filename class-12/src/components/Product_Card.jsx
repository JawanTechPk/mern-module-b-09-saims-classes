import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

function Product_Card(props) {
  const { img_url, title, rating, sold, dis_price, orignal_price } =
    props.card_data;
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia sx={{ height: 140 }} image={img_url} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Stack flexDirection="row" gap={3} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Rating: {rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sold} sold
          </Typography>
        </Stack>

        <Stack flexDirection="row" gap={3} alignItems="center">
          <Typography>Rs. {dis_price}</Typography>

          <Typography sx={{ textDecorationLine: "line-through" }}>
            Rs. {orignal_price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export { Product_Card };
