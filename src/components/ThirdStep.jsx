import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { TextValidator } from "react-material-ui-form-validator";
import MapView from "./MapView";

const ThirdStep = ({ handleChange, formData, validatorListener }) => {
  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={7} lg={7}>
          <Grid container>
            {formData?.addressLine1 && (
              <Typography
                component="span"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                {formData?.addressLine1}
              </Typography>
            )}

            {formData?.addressLine2 && (
              <Typography
                component="span"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                {formData?.addressLine2}
              </Typography>
            )}

            {formData?.city && (
              <Typography
                component="span"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                {formData?.city}
              </Typography>
            )}

            {formData?.state && (
              <Typography
                component="span"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                {formData?.state}
              </Typography>
            )}

            {formData?.country && (
              <Typography
                component="span"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                {formData?.country}
              </Typography>
            )}

            {formData?.pinCode && (
              <Typography
                component="span"
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                {formData?.pinCode}
              </Typography>
            )}
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
