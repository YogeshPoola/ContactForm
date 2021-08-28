import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleIcon from "@material-ui/icons/People";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeServices";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}));

const headCells=[
  {id:"fullname",label:"EmployeeName"},
  {id:"email",label:"E-Mail Address"},
  {id:"mobile",label:"Mobile Number"},
  {id:"departmentId",label:"Department Name"}
]

export default function Employees() {
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const classes = useStyles();
  const { TblContainer,TblHeader,TblPagination } = useTable(records,headCells);
  return (
    <>
      <PageHeader
        title="Page 1"
        subTitle="Form to test Material UI"
        icon={<PeopleIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <TblContainer>
        <TblHeader/>
          <TableBody>
            {records.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.departmentId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination/>
      </Paper>
    </>
  );
}
