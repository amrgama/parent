import axios from "axios";

async function getGrades(student, code, params) {
  const response = await axios.get(`/parent/exam-grade/${student}-${code}`, {
    params,
  });
  return response;
}
async function getAttendances(student, code, params) {
  const response = await axios.get(`/parent/attendance/${student}-${code}`, {
    params,
  });
  return response;
}
async function getMyTeachers(student, code, params) {
  const response = await axios.get(
    `/parent/student-teachers/${student}-${code}`,
    {
      params,
    }
  );
  return response;
}
async function getTeacher(id) {
  const response = await axios.get(`/parent/teacher-info/${id}`);
  return response;
}
async function getStudentInfo(student, code) {
  const response = await axios.get(`/parent/user-info/${student}-${code}`);
  return response;
}

export default {
  getGrades,
  getStudentInfo,
  getAttendances,
  getMyTeachers,
  getTeacher,
};
