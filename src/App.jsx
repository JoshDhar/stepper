import { useEffect, useState, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { ValidatorForm } from "react-material-ui-form-validator";

const steps = ["Basic info", "Address info", "Summary"];

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    city: "",
    pinCode: "",
    latLng: {
      lat: 0,
      lng: 0,
    },
  });
  const [disabled, setDisabled] = useState(false);

  const form = useRef();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleNext = () => {
    form.current.isFormValid(false).then((isValid) => {
      if (isValid) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validatorListener = (result) => {
    setDisabled(!result);
  };

  const handleAddress = (value) => {
    console.log(value);
    setFormData({
      ...formData,
      ...value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://webhook.site/72886a85-91d7-4f00-999a-da950beb759c",
        data: formData,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        marginTop={8}
      >
        <Grid item xs={12}>
          <ValidatorForm
            style={{ width: "100%" }}
            ref={form}
            onSubmit={handleSubmit}
            instantValidate
          >
            {activeStep === 0 && (
              <FirstStep
                handleChange={handleChange}
                formData={formData}
                validatorListener={validatorListener}
              />
            )}
            {activeStep === 1 && (
              <SecondStep
                handleAddress={handleAddress}
                formData={formData}
                validatorListener={validatorListener}
              />
            )}
            {activeStep === 2 && (
              <ThirdStep
                handleChange={handleChange}
                formData={formData}
                validatorListener={validatorListener}
              />
            )}
          </ValidatorForm>
        </Grid>
        <Grid item xs={12}>
          {activeStep > 0 && (
            <Button variant="contained" color="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            sx={{ marginLeft: 8 }}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
