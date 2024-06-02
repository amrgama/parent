import { useContext } from "react";
import { format } from "date-fns";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { API_ENDPOINT } from "AppConstants";
import userAvatar from "Assets/Images/user.png";
import strings from "Assets/Local/Local";
import styles from "./styles";
import male from "Assets/Images/male.png";
import female from "Assets/Images/female.png";
// UserCard
const UserCart = ({ user, subject }) => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <Box sx={classes.userCard}>
      <Box component="figure">
        <img
          src={
            user.image
              ? `${API_ENDPOINT}${user.image}`
              : user.type === "MALE"
              ? male
              : female
          }
          alt={`${user.name} `}
        />
      </Box>
      <Box>
        <Typography variant="h6" component="span" sx={classes.title}>
          {user?.name ?? ""}
        </Typography>

        <Typography>
          <Typography variant="subtitle1" sx={classes.title} component="span">
            Subject :{" "}
          </Typography>
          <Typography variant="subtitle1" component="span" sx={classes.title}>
            {subject?.name?.ar ?? ""}
          </Typography>
        </Typography>
        <Typography>
          <Typography variant="subtitle1" sx={classes.title} component="span">
            School Year :{" "}
          </Typography>
          <Typography variant="subtitle1" component="span" sx={classes.title}>
            {subject?.level?.name?.ar ?? ""}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserCart;
