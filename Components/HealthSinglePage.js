import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  CardActionArea,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import helth from "../pages/helth-tips";

const HealthSinglePage = ({ health }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 450, height: "100%" }}>
        <CardActionArea component="div">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="health tips">
                B
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Basic Aid Hospital"
            subheader={health?.date}
          />
          <CardMedia
            component="img"
            height="140"
            image={health?.image}
            alt={health?.title}
          />
          <CardContent component={"div"}>
            <Typography gutterBottom variant="h6" component="h6">
              {health?.title.slice(0, 60)}
              {health?.title?.length > 10 ? "..." : ""}
            </Typography>
            <Typography variant="body2" component={"p"} color="text.secondary">
              {health?.expect.slice(0, 130)}
              {health?.expect?.length > 130 ? "..." : ""}
            </Typography>
            <Box textAlign={"end"} component="div" sx={{ my: 2 }}>
              <Button
                href={`/health-tips/${health?._id}`}
                component={"a"}
                variant="outlined"
                sx={{ marginLeft: "auto" }}
              >
                Read More...
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default HealthSinglePage;
