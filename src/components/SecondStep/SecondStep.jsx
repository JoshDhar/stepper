import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import useSecondStep from "./useSecondStep";

const SecondStep = ({ handleAddress, formData, validatorListener }) => {
  const { address, setAddress, handleSelect } = useSecondStep(handleAddress);

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ width: "100%" }}>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
              })}
              style={{ width: "100%" }}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      {formData?.addressLine1 && (
        <Card
          sx={{
            borderRadius: 4,
            marginTop: 4,
          }}
        >
          <CardContent>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={8}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Address Line 1
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                  }}
                >
                  {formData?.addressLine1}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {formData?.addressLine2 && (
        <Card
          sx={{
            borderRadius: 4,
            marginTop: 4,
          }}
        >
          <CardContent>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={8}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Address Line 2
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                  }}
                >
                  {formData?.addressLine2}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {formData?.city && (
        <Card
          sx={{
            borderRadius: 4,
            marginTop: 4,
          }}
        >
          <CardContent>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={8}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  City
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                  }}
                >
                  {formData?.city}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {formData?.state && (
        <Card
          sx={{
            borderRadius: 4,
            marginTop: 4,
          }}
        >
          <CardContent>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={8}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  State
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                  }}
                >
                  {formData?.state}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {formData?.country && (
        <Card
          sx={{
            borderRadius: 4,
            marginTop: 4,
          }}
        >
          <CardContent>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={8}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Country
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                  }}
                >
                  {formData?.country}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {formData?.pinCode && (
        <Card
          sx={{
            borderRadius: 4,
            marginTop: 4,
          }}
        >
          <CardContent>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={8}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Pin Code
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 12,
                    fontWeight: 400,
                  }}
                >
                  {formData?.pinCode}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default SecondStep;
