import { useContext } from "react";
import { format } from "date-fns";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { API_ENDPOINT, routePath } from "AppConstants";
import male from "Assets/Images/male.png";
import female from "Assets/Images/female.png";
import { useNavigate, useParams } from "react-router-dom";

import strings from "Assets/Local/Local";
import styles from "./styles";
const TeacherCart = ({ teacher }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = styles(theme);
  // const { student, code } = useParams();
  const { student_code } = useParams();
  const [studentS, codeS] = student_code.split("-");
  const [student, code] = [studentS?.trim(), codeS?.trim()]
  return (
    <Box
      sx={classes.teacherCard}
      onClick={() =>
        navigate(
          `${routePath}${student}-${code}/${teacher.subjectId}/subject/${teacher.id}`
        )
      }
    >
      <Box component="figure">
        <img
          src={
            teacher.image
              ? `${API_ENDPOINT}${teacher.image}`
              : teacher.type === "MALE"
              ? male
              : female
          }
          alt={`${teacher.name} `}
        />
      </Box>
      <Box textAlign={"start"}>
        <Typography variant="h6" component="span" sx={classes.title}>
          {teacher.name ?? ""}
        </Typography>

        <Typography>
          <Typography variant="subtitle1" sx={classes.title} component="span">
            Subject :{" "}
          </Typography>
          <Typography variant="subtitle1" component="span" sx={classes.title}>
            {teacher.subject.name ?? ""}
          </Typography>
        </Typography>
        <Typography>
          <Typography variant="subtitle1" sx={classes.title} component="span">
            School Year :{" "}
          </Typography>
          <Typography variant="subtitle1" component="span" sx={classes.title}>
            {teacher.level.name ?? ""}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default TeacherCart;
