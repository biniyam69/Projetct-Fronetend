import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

// importing components 
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Dialog,
    DialogContent,
    DialogContentText,
    Snackbar,
} from '@mui/material';

const SuperAdminDashboard = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Super Admin Dashboard
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>

            <TextField label="username"/>
            <Select>
                <MenuItem value="police">Police</MenuItem>
                <MenuItem value="investigators">Investigators</MenuItem>
                <MenuItem value="court">Court</MenuItem>
                <MenuItem value="prison">Prison</MenuItem>
            </Select>


            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                {/* Table content */}
            </Table>


            <Dialog open={true}>
                <DialogContent>
                    <DialogContentText>
                    Add new user account
                    </DialogContentText>
                    {/* Dialog content */}
                </DialogContent>
            </Dialog>

            <Snackbar open={true} message="Account Created Successfully"/> 
        </div>
    );
};

export default SuperAdminDashboard;