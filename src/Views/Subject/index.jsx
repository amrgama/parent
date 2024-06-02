import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Logo from "Assets/Images/mainLogo.png";
import UserCard from "Components/UserCard";
import TeacherHorizntalCard from "Components/TeacherHorizntalCard";
import Attendance from "./Attendance";
import ExamGrade from "./ExamGrades";
import { useStudent, useTeacher } from "Hooks/parent";
import { Link, useParams } from "react-router-dom";
import { routePath } from "AppConstants";

const Subject = () => {
  const [button, setButton] = useState(1);
  const { data: studentData } = useStudent();
  const { student_code, id, subjectId } = useParams();
  console.log("studentAndcodestudent, dashboard",student_code)
  const [studentS, codeS] = student_code.split("-");
  const [student, code] = [studentS?.trim(), codeS?.trim()]
  const { data: teacherData } = useTeacher(id);
  console.log("student", student, "code", code, id, subjectId);
  // console.log(
  //   "teacherData===>",
  //   teacherData,
  //   subjectId,
  //   teacherData.user.subjects,
  //   teacherData.user.subjects.filter(
  //     (el) => Number(el.id) === Number(subjectId)
  //   )[0]
  // );
  return (
    <Grid container component="section" spacing={3}>
      <Grid item xs={12} md={1}>
        <Link to={`${routePath}${student}-${code}`}>
          <img src={Logo} alt={"Logo"} style={{ width: "60px" }} />
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        {studentData?.user && <UserCard user={studentData?.user} />}
      </Grid>
      <Grid item xs={12} md={4}>
        {teacherData?.user && (
          <TeacherHorizntalCard
            user={teacherData?.user}
            subject={
              teacherData?.user?.subjects?.filter(
                (el) => Number(el.id) === Number(subjectId)
              )[0]
            }
          />
        )}
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        my={2}
        sx={{ borderBottom: "1px solid #B4CDFF" }}
        px={0}
      ></Grid>
      <Grid
        item
        xs={12}
        md={12}
        textAlign={"center"}
        my={2}
        px={0}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Button
          variant={"contained"}
          onClick={() => setButton(1)}
          sx={{
            backgroundColor: button === 1 ? "#2C3D8E" : "#B4CDFF",
            color: button === 1 ? "#fff" : "#000",
          }}
        >
          Attendance
        </Button>
        <Button
          variant={"contained"}
          onClick={() => setButton(2)}
          sx={{
            backgroundColor: button === 2 ? "#2C3D8E" : "#B4CDFF",
            color: button === 2 ? "#fff" : "#000",
          }}
        >
          EXAM Results
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        my={2}
        sx={{ backgroundColor: "#fff", direction: "rtl" }}
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        pr={3}
        mx={4}
      >
        {button === 1 ? <Attendance /> : <ExamGrade />}
      </Grid>
    </Grid>
  );
};

export default Subject;
