import React, { useState } from "react";
import { Button, Dialog, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";

const CreateUser = () => {
  const useStyles = makeStyles({
    paper: {
      padding: 50,
    },
    input: {
      marginTop: 30,
    },
  });
  const classes = useStyles();

  // react-formik, react-hook-form
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const URL = "http://localhost:5000/api";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${URL}/users`,
      data: {
        firstName: firstName,
        secondName: secondName,
        phone: phone,
      },
    })
      .then(() => {
        alert("Muvaffaqqiyatli yaratildi");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        classes={{ paper: classes.paper }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="firstName"
            variant="outlined"
          />
          <TextField
            className={classes.input}
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            label="secondName"
            variant="outlined"
          />
          <TextField
            className={classes.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="phone"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.input}
            type="submit"
          >
            Post
          </Button>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateUser;
