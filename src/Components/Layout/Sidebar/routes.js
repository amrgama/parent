import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { routePath } from "AppConstants";

const routes = [
  {
    name: { ar: "الصفحة الرئيسية", en: "Dashboard" },
    path: `${routePath}dashboard`,
    Icon: <HomeIcon />,
  },
  // {
  //   name: { ar: "الدروس", en: "Lessons" },
  //   path: `${routePath}lessons`,
  //   Icon: <GroupIcon />,
  // },
  {
    name: { ar: "الطلاب", en: "Students" },
    path: `${routePath}students`,
    Icon: <GroupIcon />,
  },
  {
    name: { ar: "المساعدين", en: "Assistants" },
    path: `${routePath}assistants`,
    Icon: <AdminPanelSettingsOutlinedIcon />,
  },
  {
    name: { ar: "المجموعات", en: "Groups" },
    path: `${routePath}groups`,
    Icon: <Diversity2OutlinedIcon />,
  },
  {
    name: { ar: "طلبات الطلبه", en: "Student Request" },
    Icon: <CastForEducationOutlinedIcon />,
    childs: [
      {
        name: { ar: "الطلبات", en: "Request" },
        path: `${routePath}student-requests`,
      },
      {
        name: { ar: "الطلبات المقبولة", en: "Accepted Request" },
        path: `${routePath}student-accepted-requests`,
      },
    ]
  },
  {
    name: { ar: "الكروت", en: "Cards" },
    path: `${routePath}cards`,
    Icon: <BadgeOutlinedIcon />,
  },
  {
    name: { ar: "الحضور", en: "Attendance" },
    path: `${routePath}attendances`,
    Icon: <FactCheckOutlinedIcon />,
  },
  {
    name: { ar: "الامتحانات", en: "Exams & HW" },
    path: `${routePath}attendance`,
    Icon: <ContactSupportOutlinedIcon />,
  },

];

export default routes;
