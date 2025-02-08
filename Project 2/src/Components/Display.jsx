import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const DisplayBox = ({ data }) => {
  return (
    <Grid container spacing={2} style={{ marginTop: "20px" }}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={{ backgroundColor: "#f9f9f9" }}>
            <CardContent>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {item.title}
                <br />
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                {item.description}
              </Typography>
              <Typography style={{ color: "black" }}>
                👤: {item.username}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayBox;
