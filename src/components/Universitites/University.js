import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import {
  Grid,
  Box,
  Typography,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
} from "@mui/material";

const University = (props) => {
  const params = useParams();
  const [uni, setUni] = useState({});
  const url = `https://codzo5uokf.execute-api.us-east-1.amazonaws.com/dev/universities/${params.uniId}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUni(response.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} mb={3}>
        <Card key={{ key: 1 }} sx={{ mb: 3 }}>
          <CardActions>
            <Box
              component="img"
              sx={{
                height: 233,
                width: 500,
              }}
              alt=""
              src={uni.uni_img}
            />
          </CardActions>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {uni.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {uni.city} , {uni.country}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{ p: 1, m: 1 }}
                >
                  About
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ p: 1, m: 1 }}
                >
                  {uni.description}
                </Typography>
              </Box>
              <Box
                Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{ p: 1, m: 1 }}
                >
                  Cost
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ p: 1, m: 1 }}
                >
                  ${uni.living_expense} Average Living Expenses
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{ p: 1, m: 1 }}
                >
                  Admissions
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ p: 1, m: 1 }}
                >
                  {uni.acceptance_rate} Average acceptance rate
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ p: 1, m: 1 }}
                >
                  ${uni.admission_fees} Application Fees
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
};

export default University;
