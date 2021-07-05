import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

export default function Users({ users }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const classes = useStyles();

  const heads = ["Ism", "Familiya", "Telefon raqam", "Sana", "Actions"];

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then(() => {
        alert("Muvaffaqqiyatli ochirildi");
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {heads.map((item) => (
              <StyledTableCell>{item}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow>
              <StyledTableCell>{user.firstName}</StyledTableCell>
              <StyledTableCell>{user.secondName}</StyledTableCell>
              <StyledTableCell>{user.phone}</StyledTableCell>
              <StyledTableCell>
                {new Date(user.createdAt).toLocaleString()}
              </StyledTableCell>
              
              <StyledTableCell>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(user._id)}>
                  <Delete />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
