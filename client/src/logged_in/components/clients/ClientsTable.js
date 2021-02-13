import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  withStyles
} from "@material-ui/core";
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
// import ColorfulChip from "../../../shared/components/ColorfulChip";
// import unixToDateString from "../../../shared/functions/unixToDateString";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
// import currencyPrettyPrint from "../../../shared/functions/currencyPrettyPrint";

const styles = theme => ({
  tableWrapper: {
    overflowX: "auto",
    width: "100%"
  },
  blackBackground: {
    backgroundColor: theme.palette.primary.main
  },
  contentWrapper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2)
    },
    width: "100%"
  },
  dBlock: {
    display: "block !important"
  },
  dNone: {
    display: "none !important"
  },
  firstData: {
    paddingLeft: theme.spacing(3)
  }
});

const rows = [
  {
    id: "name",
    numeric: false,
    label: "Name"
  },
  {
    id: "email",
    numeric: false,
    label: "Email"
  },
  {
    id: "phone",
    numeric: false,
    label: "Phone"
  },
  {
    id: "address",
    numeric: false,
    label: "Address"
  },
  {
    id: "age",
    numeric: false,
    label: "Age"
  }
];

const rowsPerPage = 25;

function ClientsTable(props) {
  const { clients, theme, classes } = props;
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback(
    (_, page) => {
      setPage(page);
    },
    [setPage]
  );
  if (clients.length > 0) {
    return (
      <div className={classes.tableWrapper}>
        <Table aria-labelledby="tableTitle">
          <EnhancedTableHead rowCount={clients.length} rows={rows} />
          <TableBody>
            {clients
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((client, index) => (
                <TableRow hover tabIndex={-1} key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.firstData}
                  >
                    {client.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {/* {client.phone > 0 ? (
                      <ColorfulChip
                        label={`+${currencyPrettyPrint(
                          client.phone
                        )}`}
                        color={theme.palette.secondary.main}
                      />
                    ) : (
                      <ColorfulChip
                        label={currencyPrettyPrint(client.email)}
                        color={theme.palette.error.dark}
                      />
                    )} */}
                    {client.email}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {/* {unixToDateString(client.age)} */}
                    {client.phone}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {/* {client.address
                      ? unixToDateString(client.address)
                      : ""} */}
                      {client.address}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {/* {client.address
                      ? unixToDateString(client.address)
                      : ""} */}
                      {client.age}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={clients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleChangePage}
          classes={{
            select: classes.dNone,
            selectIcon: classes.dNone,
            actions: clients.length > 0 ? classes.dBlock : classes.dNone,
            caption: clients.length > 0 ? classes.dBlock : classes.dNone
          }}
          labelRowsPerPage=""
        />
      </div>
    );
  }
  return (
    <div className={classes.contentWrapper}>
      <HighlightedInformation>
        No clients received yet.
      </HighlightedInformation>
    </div>
  );
}

ClientsTable.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  clients: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, { withTheme: true })(ClientsTable);
