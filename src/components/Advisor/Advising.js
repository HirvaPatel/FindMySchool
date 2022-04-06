import { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Box,
  Button,
  TextField,
  CardContent,
  Card,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const Advising = () => {
  const navigate = useNavigate();

  const appointmentDefaultValues = {
    appId: 1,
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    interest: "",
    description: "",
  };
  const [appointmentValues, setFormValues] = useState(appointmentDefaultValues);
  //This function is used to handle the changes in form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const url =
    "https://codzo5uokf.execute-api.us-east-1.amazonaws.com/dev/consult";
  //This function used to submit the form. It calls the post API.
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(url, appointmentValues)
      .then((res) => {
        alert("Successfully booked the appointment!!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, m: 1 }}>
        <Grid container>
          <Grid item xs>
            <Card sx={{ width: "75%", boxShadow: 3, mx: "auto" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    m: 2,
                    alignItems: "center",
                  }}
                >
                  Book an Advisor
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      m: 1,
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ alignItems: "center" }}>
                      <TextField
                        fullWidth
                        required
                        label="First Name"
                        name="first_name"
                        type="text"
                        sx={{ mb: 3 }}
                        value={appointmentValues.firstName}
                        onChange={handleInputChange}
                      />
                      <TextField
                        fullWidth
                        required
                        label="Last Name"
                        name="last_name"
                        type="text"
                        sx={{ mb: 3 }}
                        value={appointmentValues.lastName}
                        onChange={handleInputChange}
                      />
                      <TextField
                        fullWidth
                        required
                        label="Email"
                        name="email"
                        type="text"
                        sx={{ mb: 3 }}
                        value={appointmentValues.email}
                        onChange={handleInputChange}
                      />
                      <TextField
                        fullWidth
                        required
                        label="Contact Number"
                        name="contact_number"
                        type="text"
                        sx={{ mb: 3 }}
                        value={appointmentValues.contact}
                        onChange={handleInputChange}
                      />

                      <TextField
                        fullWidth
                        required
                        label="Area of interest"
                        name="interest"
                        type="text"
                        sx={{ mb: 3 }}
                        value={appointmentValues.interest}
                        onChange={handleInputChange}
                      />

                      <TextField
                        fullWidth
                        required
                        label="Describe what help are you looking for?"
                        name="description"
                        type="text"
                        multiline
                        rows={4}
                        rowsmax={6}
                        sx={{ mb: 3 }}
                        value={appointmentValues.description}
                        onChange={handleInputChange}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      sx={{ m: 1, width: "25ch" }}
                      type="submit"
                      onSubmit={() => handleSubmit}
                    >
                      Book Appointment
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Advising;
