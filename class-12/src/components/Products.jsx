import React from "react";
import { Product_Card } from "./Product_Card";
import { Grid } from "@mui/material";

const products_arr = [
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
  {
    img_url:
      "https://static-01.daraz.pk/p/04bbf090b25a67f223cd7911a2ea15f0.jpg_750x750.jpg_.webp",
    title: "Haier 16 Cu Ft/Digital Inverter/HRF-438IDBA",
    rating: 4,
    sold: 232,
    dis_price: 2000,
    orignal_price: 2200,
  },
];

export const Products = () => {
  return (
    <>
      <Grid container>
        {products_arr.map((current_obj, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Product_Card
                //   img_url, title, rating, sold, dis_price, original_price
                card_data={current_obj}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
