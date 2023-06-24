import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

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

const CourtDashboard = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Court Dashboard
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default CourtDashboard;
