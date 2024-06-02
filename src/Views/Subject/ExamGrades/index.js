import React, { useState } from "react";
import { DataGrid, getGridStringOperators } from "@mui/x-data-grid";
import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomToolbar from "Components/DataGrid/Toolbar";
import NoData from "Components/DataGrid/NoData";
import strings from "Assets/Local/Local";
import { useParams } from "react-router-dom";
import { useGrades } from "Hooks/parent";
import format from "date-fns/format";

const rowsPerPageOptions = [5, 10, 20, 25, 50, 100];

function LargeView(props) {
  return (
    <DataGrid
      pagination
      autoHeight
      disableRowSelectionOnClick
      pageSizeOptions={rowsPerPageOptions}
      paginationModel={{
        pageSize: props.pageSize,
        page: props.page,
      }}
      paginationMode="server"
      rowCount={props.gradesData?.totalCount ?? 0}
      onPaginationModelChange={(params) => {
        props.setPageSize(params.pageSize);
        props.setPage(params.page);
      }}
      loading={props.isLoading}
      columns={[
        {
          headerName: "تاريخ الإمتحان",
          field: "examDate",
          flex: 0.8,
          minWidth: 150,
          // type: "date",
          valueGetter: ({ row }) => (!!row.exam?.attendanceLecture?.date)?  format(
            new Date(row.exam?.attendanceLecture?.date),
            "yyyy/MM/dd"
          ): "لا يوجد",
        },
        {
          headerName: "اسم الامتحان",
          field: "examName",
          valueGetter: ({ row }) => row.exam,
          valueFormatter: ({ value }) => value.name,
          flex: 0.8,
          minWidth: 150,
          type: "singleSelect",
          valueOptions: [],
        },
        {
          headerName: "نوع الامتحان",
          field: "examType",
          valueGetter: ({ row }) => row.exam.type,
          valueFormatter: ({ value }) => strings.examType[value],
          flex: 0.8,
          minWidth: 150,
          type: "singleSelect",
          valueOptions: [],
        },
        {
          headerName: "درجة الإمتحان",
          field: "grade",
          flex: 0.8,
          minWidth: 150,
          type: "number",
        },
        {
          headerName: "درجة الإمتحان النهائية",
          field: "maxGrade",
          flex: 0.8,
          minWidth: 150,
          type: "number",
        },
      ]}
      rows={props.grades}
      columnTypes={{
        string: {
          filterOperators: getGridStringOperators().filter((operator) => {
            return operator.value === "contains";
          }),
        },
      }}
      slots={{
        toolbar: CustomToolbar,
        noRowsOverlay: NoData,
      }}
      localeText={{
        toolbarColumns: strings.Columns,
        toolbarFilters: strings.Filters,
        toolbarDensity: strings.Density,
        columnsPanelTextFieldLabel: strings.FindColumn,
        columnsPanelShowAllButton: strings.ShowAll,
        columnsPanelHideAllButton: strings.HideAll,
        checkboxSelectionHeaderName: strings.CheckboxSelection,
        columnsPanelTextFieldPlaceholder: strings.ColumnTitle,
        filterPanelInputPlaceholder: strings.FilterValue,
        filterPanelColumns: strings.Columns,
        filterPanelInputLabel: strings.Value,
        filterOperatorContains: strings.Contains,
      }}
      slotProps={{
        pagination: {
          labelRowsPerPage: strings.RowsPerPage,
        },
      }}
    />
  );
}

function SmallView({ page, setPage, gradesData, isLoading, grades }) {
  console.log("grades", grades)
  return (
    <Box>
      <Grid container spacing={4} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        {isLoading ? (
          <Grid item xs={4}>
            <CircularProgress />
          </Grid>
        ) : !grades.length ? (
          <Grid item xs={4}>
            <NoData />
          </Grid>
        ) : (
          grades.map((grade) => (
            <Grid item xs={1} key={grade.id}>
              <Card>
                <CardContent>
                  <Typography
                    component="bdi"
                    sx={{ fontSize: 14 }}
                    gutterBottom
                    fontWeight="bold"
                  >
                    {grade.grade}{" "}
                    <Typography component="span" fontWeight="normal">
                      /
                    </Typography>{" "}
                    {grade.maxGrade}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {grade.exam.name}
                  </Typography>
                  <Chip
                    color="primary"
                    label={strings.examType[grade.exam.type]}
                    sx={{ color: "#fff", mb: 1.5 }}
                  />
                  <Typography variant="body2">
                    {
                      (!!grade.exam?.attendanceLecture?.date)?
                        format(
                          new Date(grade.exam?.attendanceLecture?.date),
                          "yyyy/MM/dd"
                        )
                      :
                        "لا يوجد"
                    }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
      <Box display="flex" justifyContent="center" mt={1} p={2}>
        <Pagination
          page={page + 1}
          onChange={(e, page) => setPage(page - 1)}
          count={gradesData?.pageCount ?? 1}
        />
      </Box>
    </Box>
  );
}

function ViewData(props) {
  if (props.isSmall) return <SmallView {...props} />;
  return <LargeView {...props} />;
}

const ViewExamGrades = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(rowsPerPageOptions[0]);

  const { id } = useParams();
  const { data: gradesData, isLoading } = useGrades(
    {
      page: page + 1,
      limit: pageSize,
      teacher: id,
    },
    {
      enabled: !!id,
    }
  );
  const grades = gradesData?.data ?? [];
  const isSmall = useMediaQuery((th) => th.breakpoints.down("lg"));
  return (
    <>
      <Box width={"100%"} dir={"rtl"}>
        <ViewData
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          gradesData={gradesData}
          isLoading={isLoading}
          grades={grades}
          isSmall={isSmall}
        />
      </Box>
    </>
  );
};

export default ViewExamGrades;
