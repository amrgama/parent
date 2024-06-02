const styles = (theme) => ({
  teacherCard: {
    cursor:"pointer",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "15px",
    borderRadius: "8px",
    alignItems: "start",
    "& figure": {
      width: "140px",
      height: "140px",
      borderRadius: "8px",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        boxShadow: "0 0 10px 0 rgb(0 0 0 / 10%)",
      },
    },
  },
  title: {
    color: "#ffff",
  },
  company: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    "& a": {
      color: theme.palette.text.primary,
      textDecoration: "none",
    },
  },
  phone: {
    "& a": {
      color: theme.palette.text.black,
      textDecoration: "none",
    },
  },
});

export default styles;
