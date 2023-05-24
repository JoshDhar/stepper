import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import MapView from "../MapView";

const ThirdStep = ({ formData }) => {
  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={7} lg={7}>
          <Grid container>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {formData?.firstName} {formData?.lastName}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {formData?.phone}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {formData?.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formData?.addressLine1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formData?.addressLine2}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formData?.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formData?.state}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formData?.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {formData?.pinCode}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={5}>
          <MapView formData={formData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThirdStep;
