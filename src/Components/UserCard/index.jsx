import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { API_ENDPOINT } from "AppConstants";
import userAvatar from "Assets/Images/user.png";
import strings from "Assets/Local/Local";
import styles from "./styles";
import { useContext } from "react";
import { LangContext } from "App";
// UserCard
const UserCart = ({ user }) => {
  const theme = useTheme();
  const classes = styles(theme);
  const { lang } = useContext(LangContext);
  return (
    <Box sx={classes.userCard}>
      <Box component="figure">
        <img
          src={user.image ? `${API_ENDPOINT}${user.image}` : userAvatar}
          alt={`${user.name} `}
        />
      </Box>
      <Box>
        <Typography variant="h6" component="span" sx={classes.title}>
          {user.name ?? ""}
        </Typography>
        <Typography>
          <Typography variant="subtitle1" sx={classes.title} component="span">
            code :{" "}
          </Typography>
          <Typography variant="subtitle1" component="span" sx={classes.title}>
            {user.code ?? ""}
          </Typography>
        </Typography>
        <Typography>
          <Typography variant="subtitle1" sx={classes.title} component="span">
            parent Number :{" "}
          </Typography>
          <Typography variant="subtitle1" component="span" sx={classes.title}>
            {user.parentNumber ?? ""}
          </Typography>
        </Typography>
        <Typography>
          <Typography variant="subtitle1" sx={classes.title} component="span">
            School Year :{" "}
          </Typography>
          <Typography variant="subtitle1" component="span" sx={classes.title}>
            {user.level.name?.[lang] ?? user.level.name ?? ""}
          </Typography>
        </Typography>
        <Typography>
          <Typography variant="subtitle1" sx={classes.title} component="span">
            School Name :{" "}
          </Typography>
          <Typography variant="subtitle1" component="span" sx={classes.title}>
            {user.schoolName ?? strings.NotExist}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserCart;
