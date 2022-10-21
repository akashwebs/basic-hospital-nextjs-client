import {
  Avatar,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

export async function getServerSideProps(context) {
  // Fetch data from external API
  const id = context.params.id;
  const res = await fetch(
    `https://basic-hospital-server.vercel.app/single-page-post/` + id
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { health: data } };
}

const Sinlge = ({ health }) => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box mt={8}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "#fff" }}
            >
              {health.title}
            </Typography>

            <CardMedia
              component="img"
              height="auto"
              image={health?.image}
              alt={health?.title}
              sx={{ my: 2 }}
            />
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
              className="helthTiitle"
            />

            <div
              className="my-8 activity-sigle-post"
              id="solaiman-font"
              dangerouslySetInnerHTML={{ __html: health?.content }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Container>
  );
};

export default Sinlge;
