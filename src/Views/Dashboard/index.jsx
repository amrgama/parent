import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "Assets/Images/mainLogo.png";
import UserCard from "Components/UserCard";
import TeacherCard from "Components/TeacherCard";
import { Link, useParams } from "react-router-dom";
import { useMyTeachers, useStudent } from "Hooks/parent";
import { routePath } from "AppConstants";
const Dashboard = () => {
  // const { student, code } = useParams();
  const { student_code } = useParams();
  console.log("studentAndcodestudent, dashboard",student_code)
  const [student, code] = student_code.split("-");
  
  const { data: studentData } = useStudent();
  const { data: teachersData } = useMyTeachers(
    { all: true },
    {
      select: (res) => ({
        ...res.data,
        data: res.data.data?.reduce(
          (prev, curr) => [
            ...prev,
            ...curr.groups.map((g) => ({
              name: curr.teacher.name,
              level: { name: g?.group?.subject?.level?.name?.ar },
              subject: { name: g?.group?.subject?.name?.ar },
              subjectId: g?.group?.subject?._id,
              type: curr.teacher.type,
              id: curr.teacher._id,
            })),
          ],
          []
        ),
      }),
    }
  );
  const teachers = teachersData?.data ?? [];
  console.log("studentData=====>***", studentData);
  console.log("teachers=====>***", teachersData);

  // const teachers = [
  //   {
  //     name: "Mr. test testing test",
  //     level: { name: "الثاني الثانوي" },
  //     subject: { name: "Test" },
  //     type: "MALE",
  //     id: 1,
  //   },
  //   {
  //     name: "Ms. test testing test",
  //     level: { name: "الثاني الثانوي" },
  //     subject: { name: "Test" },
  //     type: "FEMALE",
  //     id: 1,
  //   },
  //   {
  //     name: "Mr. test testing test",
  //     level: { name: "الثاني الثانوي" },
  //     subject: { name: "Test" },
  //     type: "MALE",
  //     id: 1,
  //   },
  //   {
  //     name: "Ms. test testing test",
  //     level: { name: "الثاني الثانوي" },
  //     subject: { name: "Test" },
  //     type: "FEMALE",
  //     id: 1,
  //   },
  //   {
  //     name: "Mr. test testing test",
  //     level: { name: "الثاني الثانوي" },
  //     subject: { name: "Test" },
  //     type: "MALE",
  //     id: 1,
  //   },
  //   {
  //     name: "Ms. test testing test",
  //     level: { name: "الثاني الثانوي" },
  //     subject: { name: "Test" },
  //     type: "FEMALE",
  //     id: 1,
  //   },
  //   {
  //     name: "Mr. test testing test",
  //     level: { name: "الثاني الثانوي" },
  //     subject: { name: "Test" },
  //     type: "MALE",
  //     id: 1,
  //   },
  //   {
  //     name: "Ms. test testing test",
  //     level: { name: "الثاني الثانوي" },
  //     subject: { name: "Test" },
  //     type: "FEMALE",
  //     id: 1,
  //   },
  // ];
  // <div>heloow</div>
  return (
    <Grid container component="section" spacing={3}>
      <Grid item xs={12} md={1}>
        <Link to={`${routePath}${student}-${code}`}>
          <img src={Logo} alt={"Logo"} style={{ width: "60px" }} />
        </Link>
      </Grid>
      <Grid item xs={12} md={11}>
        {studentData?.user && <UserCard user={studentData?.user} />}
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        textAlign={"center"}
        my={2}
        sx={{ borderBottom: "1px solid #B4CDFF" }}
        px={0}
      >
        <Typography variant="h6" sx={{ color: "#ffff" }} component="span">
          لمتابعه مستوى الطالب لدى المعلم برجاء الضغط على صوره او اسم المعلم
        </Typography>
      </Grid>
      <Grid container component="section" spacing={3} mt={4}>
        {teachers.map((el, index) => {
          return (
            <Grid item xs={12} md={2} key={index}>
              <TeacherCard teacher={el} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
