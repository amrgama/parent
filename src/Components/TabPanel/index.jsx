import Box from "@mui/material/Box";

function TabPanel({ children, value, index, unMountOnHide = false, ...other }) {

    return unMountOnHide && value !== index ? null : (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            display={value === index ? "block" : "none"}
            {...other}
        >
            {children}
        </Box>
    );
}
export default TabPanel