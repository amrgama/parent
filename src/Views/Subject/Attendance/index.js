import { useState } from "react";
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
import { useAttendances } from "Hooks/parent";
import { useParams } from "react-router-dom";
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
      rowCount={props.attendancesData?.totalCount ?? 0}
      onPaginationModelChange={(params) => {
        props.setPageSize(params.pageSize);
        props.setPage(params.page);
      }}
      loading={props.isLoading}
      columns={[
        {
          headerName: "تاريخ الحضور أو الغياب",
          field: "date",
          flex: 0.8,
          minWidth: 150,
          // type: "date",
          valueGetter: ({ value }) => (!!value)?  format(
            new Date(value),
            "yyyy/MM/dd"
          ): "لا يوجد",
        },
        {
          headerName: "اسم المجموعه",
          field: "groupStudent",
          flex: 0.8,
          minWidth: 150,
          valueFormatter: ({ value }) => value?.group?.name,
          type: "string", // type: "singleSelect",
          // valueOptions: [],
        },
        {
          headerName: "رقم الحصة",
          field: "attendanceLecture",
          flex: 0.8,
          minWidth: 150,
          valueFormatter: ({ value }) => value?.lesson,
          type: "number",
        },
        {
          headerName: "الحالة",
          field: "status",
          flex: 0.8,
          minWidth: 150,
          valueFormatter: ({ value }) => (value === "ATTEND" ? "حاضر" : "غائب"),
          type: "singleSelect",
          valueOptions: [
            {
              label: "حاضر",
              value: "ATTEND",
            },
            {
              label: "غائب",
              value: "ABSENT",
            },
          ],
        },
      ]}
      rows={props.attendances}
      sx={{
        "& .MuiDataGrid-row": {
          bgcolor: "error.main",
          color: "#fff",
          "&:hover": {
            bgcolor: "error.main",
          },
          "&.attend-success": {
            bgcolor: "success.main",
            "&:hover": {
              bgcolor: "success.main",
            },
          },
        },
      }}
      getRowClassName={({ row }) =>
        row.status === "ATTEND" ? "attend-success" : ""
      }
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

function SmallView({ page, setPage, attendancesData, isLoading, attendances }) {
  return (
    <Box>
      <Grid container spacing={4} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        {isLoading ? (
          <Grid item xs={4}>
            <CircularProgress />
          </Grid>
        ) : !attendances.length ? (
          <Grid item xs={4}>
            <NoData />
          </Grid>
        ) : (
          attendances.map((att) => (
            <Grid item xs={1} key={att.id}>
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    رقم الحصة :{" "}
                    <Typography component="span" fontWeight="bold">
                      {att.attendanceLecture?.lesson}
                    </Typography>
                  </Typography>
                  <Typography variant="h5" component="div">
                    {att.groupStudent?.group?.name}
                  </Typography>
                  <Chip
                    color={att.status === "ATTEND" ? "success" : "error"}
                    label={att.status === "ATTEND" ? "حاضر" : "غائب"}
                    sx={{ color: "#fff", mb: 1.5 }}
                  />
                  <Typography variant="body2">
                    {
                      (!!att?.date)?  format(
                        new Date(att?.date),
                        "yyyy/MM/dd"
                      ): "لا يوجد"
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
          count={attendancesData?.pageCount ?? 1}
        />
      </Box>
    </Box>
  );
}

function ViewData(props) {
  if (props.isSmall) return <SmallView {...props} />;
  return <LargeView {...props} />;
}

const ViewAttendance = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(rowsPerPageOptions[0]);
  const { id } = useParams();
  const { data: attendancesData, isLoading } = useAttendances(
    {
      page: page + 1,
      limit: pageSize,
      teacher: id,
    },
    {
      enabled: !!id,
    }
  );
  const attendances = attendancesData?.data ?? [];
  const isSmall = useMediaQuery((th) => th.breakpoints.down("lg"));
  return (
    <Box width={"100%"} dir="rtl">
      <ViewData
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        attendancesData={attendancesData}
        isLoading={isLoading}
        attendances={attendances}
        isSmall={isSmall}
      />
    </Box>
  );
};

export default ViewAttendance;
