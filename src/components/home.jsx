import { signOut } from "firebase/auth";
import { autentication } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
    Avatar,
    Button,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { blue } from "@mui/material/colors";
const emails = ["username@gmail.com", "user02@gmail.com"];
export default function Home() {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    const handleListItemClick = (value) => {
        handleClose(value);
    };

    const navigate = useNavigate();
    function logOut() {
        signOut(autentication)
            .then(() => {
                // code for redirect user to Log-in page
                // ...
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Set backup account</DialogTitle>
                <List sx={{ pt: 0 }}>
                    {emails.map((email) => (
                        // eslint-disable-next-line react/jsx-key
                        <ListItem disableGutters>
                            <ListItemButton
                                onClick={() => handleListItemClick(email)}
                                key={email}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{ bgcolor: blue[100], color: blue[600] }}
                                    ></Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disableGutters>
                        <ListItemButton
                            autoFocus
                            onClick={() => handleListItemClick("addAccount")}
                        >
                            <ListItemAvatar>
                                <Avatar></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add account" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Dialog>

            <h1>Holiwis</h1>
            <Typography variant="subtitle1" component="div">
                Selected: {selectedValue}
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            
            <button onClick={logOut}>Log out</button>
        </div>
    );
}
