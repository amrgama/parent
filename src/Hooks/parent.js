import { useParams } from "react-router-dom";
import useQueryService from "./useQueryService";
import parentServices from "Services/parent";
/**
 * @param {Omit<import("@tanstack/react-query").UseQueryOptions,"queryKey"|"queryFn">} [options]
 */
export const useStudent = (options) => {
  // const { student, code } = useParams();
  const { student_code } = useParams();
  console.log("studentAndcodestudent, useSTudent",student_code)
  const [studentS, codeS] = student_code.split("-");
  const [student, code] = [studentS?.trim(), codeS?.trim()]
  console.log("student", student, "code", code);
  return useQueryService({
    key: ["student", student, code],
    fetcher: () => parentServices.getStudentInfo(student, code),
    ...options,
    enabled:
      Boolean(student && code) &&
      (options ? ("enabled" in options ? options.enabled : true) : true),
  });
};
/**
 * @param {Record<string,any>} [params]
 * @param {Omit<import("@tanstack/react-query").UseQueryOptions,"queryKey"|"queryFn">} [options]
 */
export const useGrades = (params, options) => {
  // const { student, code } = useParams();
  const { student_code } = useParams();
  const [studentS, codeS] = student_code.split("-");
  const [student, code] = [studentS?.trim(), codeS?.trim()]
  return useQueryService({
    key: ["grades", student, code, params],
    fetcher: () => parentServices.getGrades(student, code, params),
    ...options,
    enabled:
      Boolean(student && code) &&
      (options ? ("enabled" in options ? options.enabled : true) : true),
  });
};
/**
 * @param {Record<string,any>} [params]
 * @param {Omit<import("@tanstack/react-query").UseQueryOptions,"queryKey"|"queryFn">} [options]
 */
export const useMyTeachers = (params, options) => {
  // const { student, code } = useParams();
  const { student_code } = useParams();
  console.log("studentAndcodestudent, dashboard",student_code)
  const [studentS, codeS] = student_code.split("-");
  const [student, code] = [studentS?.trim(), codeS?.trim()]
  console.log("student", student, "code", code);
  return useQueryService({
    key: ["teachers", student, code, params],
    fetcher: () => parentServices.getMyTeachers(student, code, params),
    ...options,
    enabled:
      Boolean(student && code) &&
      (options ? ("enabled" in options ? options.enabled : true) : true),
  });
};
/**
 * @param {number|string} [id]
 * @param {Omit<import("@tanstack/react-query").UseQueryOptions,"queryKey"|"queryFn">} [options]
 */
export const useTeacher = (id, options) => {
  return useQueryService({
    key: ["teacher", id],
    fetcher: () => parentServices.getTeacher(id),
    ...options,
    enabled:
      Boolean(id) &&
      (options ? ("enabled" in options ? options.enabled : true) : true),
  });
};
/**
 * @param {Record<string,any>} [params]
 * @param {Omit<import("@tanstack/react-query").UseQueryOptions,"queryKey"|"queryFn">} [options]
 */
export const useAttendances = (params, options) => {
  const { student_code } = useParams();
  console.log("studentAndcodestudent, dashboard",student_code)
  const [studentS, codeS] = student_code.split("-");
  const [student, code] = [studentS?.trim(), codeS?.trim()]
  return useQueryService({
    key: ["attendances", student, code, params],
    fetcher: () => parentServices.getAttendances(student, code, params),
    ...options,
    enabled:
      Boolean(student && code) &&
      (options ? ("enabled" in options ? options.enabled : true) : true),
  });
};
