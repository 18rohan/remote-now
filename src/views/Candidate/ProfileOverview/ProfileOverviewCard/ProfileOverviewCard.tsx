import { Box, Container, Grid, Typography } from "@mui/material";
const ProfileOverviewCard = () => {
  return (
    <Box
      border="1px solid grey"
      width="100%"
      sx={{
        backgroundColor: "white",
        border: "1px solid black",
        padding:"50px",
        boxShadow: "7px 10px black",
      }}
      
    >
      {/* Name and Profile picture */}
      <Grid
        container
        padding="50px"
        justifyContent="center"
        alignItems="center"
        border="1px solid grey"
      >
        <Grid item xs={2}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
          >
            <img
              src={"../../../../assets/art2.jpeg"}
              width="100x"
              height="100px"
              style={{ borderRadius: "50%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={10} padding="50px">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            marginLeft="8px"
          >
            <Typography variant="h5" fontWeight="bold">
              Rohan Sharma
            </Typography>
            <Typography variant="subtitle2" fontWeight="500" color="gray">
              2 years of exp. Gurgaon, India. Open to remote
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} alignItems="center" justifyContent="center">
          <Typography variant="subtitle1" fontWeight="bold">
            Looking For{" "}
          </Typography>
        </Grid>
        <Grid item xs={10} marginTop="20px">
          <Box>
            <Typography variant="body1">
              Looking for a mid-size to large-size team to work/collaborate with
              on exciting projects/products. I am proficient in javascript, and
              have experience in working on back-end frameworks like Express.js,
              Node.js, along with ReactJs, Tailwind-CSS, jquery. I would love to
              work on new technology in future.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            Acheivements
          </Typography>
        </Grid>
        <Grid item xs={10} marginTop="25px">
          <Box>
            <Typography variant="body1">
              Looking for a mid-size to large-size team to work/collaborate with
              on exciting projects/products. I am proficient in javascript, and
              have experience in working on back-end frameworks like Express.js,
              Node.js, along with ReactJs, Tailwind-CSS, jquery. I would love to
              work on new technology in future.
            </Typography>
          </Box>
        </Grid>
        <Grid container marginTop="20px">
          <Grid item xs={3} sx={{ backgroundColor: "white" }}>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Typography variant="subtitle1" fontWeight="bold">
                Experience
              </Typography>
            </Box>
            {/* <Typography variant="h5">🥇</Typography> */}
          </Grid>
          <Grid
            item
            xs={9}
            marginTop="25px"
            borderLeft="1px solid gray"
            paddingLeft="12px"
          >
            <Box>
              <Typography variant="body1">
                Looking for a mid-size to large-size team to work/collaborate
                with on exciting projects/products. I am proficient in
                javascript, and have experience in working on back-end
                frameworks like Express.js, Node.js, along with ReactJs,
                Tailwind-CSS, jquery. I would love to work on new technology in
                future.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ backgroundColor: "white" }}>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              {/* <Typography variant="subtitle1" fontWeight="bold">Experience</Typography> */}
            </Box>
            {/* <Typography variant="h5">🥇</Typography> */}
          </Grid>
          <Grid
            item
            xs={9}
            marginTop="25px"
            borderLeft="1px solid gray"
            paddingLeft="12px"
          >
            <Box>
              <Typography variant="body1">
                Looking for a mid-size to large-size team to work/collaborate
                with on exciting projects/products. I am proficient in
                javascript, and have experience in working on back-end
                frameworks like Express.js, Node.js, along with ReactJs,
                Tailwind-CSS, jquery. I would love to work on new technology in
                future.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="subtitle2">Education</Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              Bachelor's, Computer Science and Engineering
            </Typography>
            <Typography variant="subtitle1" fontWeight="500">
              Manav Rachna University • 2019
            </Typography>
          </Grid>
        </Grid>
        <Grid container marginTop="20px">
          <Grid item xs={7}>
            <Typography variant="subtitle1" fontWeight="bold">
              Ideal Next Oppurtunity
            </Typography>
            <Typography variant="subtitle2">Desired Salary</Typography>
            <Box
              sx={{ backgroundColor: "lightgray" }}
              padding="4px"
              display="flex"
              justifyContent="flex-start"
            >
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                US$7,457
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7} marginTop="20px">
            <Typography variant="subtitle2">Desired Role</Typography>
            <Box
              sx={{ backgroundColor: "lightgray" }}
              padding="4px"
              display="flex"
              justifyContent="flex-start"
            >
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                Frontend Developer
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7} marginTop="20px">
            <Typography variant="subtitle2">Remote Work</Typography>
            <Box
              sx={{ backgroundColor: "lightgray" }}
              padding="4px"
              display="flex"
              justifyContent="flex-start"
            >
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                Remote Preferred
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7} marginTop="20px">
            <Typography variant="subtitle2">Desired Location</Typography>
            <Box
              sx={{ backgroundColor: "lightgray" }}
              padding="4px"
              display="flex"
              justifyContent="flex-start"
            >
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                Faridabad(current)
              </Typography>
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                Bangalore
              </Typography>
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                Gurgaon
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7} marginTop="20px">
            <Typography variant="subtitle2">Desired Tech Stack</Typography>
            <Box
              sx={{ backgroundColor: "lightgray" }}
              padding="4px"
              display="flex"
              justifyContent="flex-start"
            >
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                React.js
              </Typography>
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                Express.js
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7} marginTop="20px">
            <Typography variant="subtitle2">Desired Company Size</Typography>
            <Box
              sx={{ backgroundColor: "lightgray" }}
              padding="4px"
              display="flex"
              justifyContent="flex-start"
            >
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                51-100
              </Typography>
              <Typography variant="subtitle1" color="black" fontWeight="bold">
                201-500
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileOverviewCard;
