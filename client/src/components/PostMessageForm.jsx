import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField, withStyles, Button } from "@material-ui/core";
import {AssignmentTurnedIn} from '@material-ui/icons'
import ButterToast ,{Cinnamon} from 'butter-toast'
import useForm from "./UseForm";
import * as Actions from '../actions/postMessage'

const initialFieldValues = {
  title: "",
  message: "",
};

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  postBtn: {
    width: "50%",
  },
});

const PostMessageForm = ({ classes, ...props }) => {
    useEffect(()=>{
        if(props.currentId !== 0){
            setValues({
                ...props.postMessageList.find(x=>x._id === props.currentId)
            })
            setErrors({})
        }
    },[props.currentId])

    var { values, setValues, handleInputChange, errors, setErrors,resetForm } = useForm(
      initialFieldValues,props.setcurrentId
    );
  
  const validate = () => {
    let temp = { ...errors };
    temp.title = values.title ? "" : "this field is required";
    temp.message = values.message ? "" : "this field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess =()=>{
        ButterToast.raise({
            content:<Cinnamon.Crisp title='Post Box'
            content="submitted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            icon={<AssignmentTurnedIn/>}
            />
        })
        resetForm()
    }
    if (validate()) {
        if(props.currentId === 0)
        props.createPostMessage(values,onSuccess)
        else
        props.updatePostMessage(props.currentId,values,onSuccess)
    }
  };

  return (
    <form
      action=""
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={values.title}
        onChange={handleInputChange}
        {...(errors.title && { error: true, helperText: errors.title })}
      />
      <TextField
        name="message"
        variant="outlined"
        label="Message"
        fullWidth
        value={values.message}
        multiline
        rows={4}
        onChange={handleInputChange}
        {...(errors.message && { error: true, helperText: errors.message })}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        className={classes.postBtn}
      >
        submit
      </Button>
    </form>
  );
};

const mapStateTProps = (state) => ({
    postMessageList: state.postMessage.list,
});

const mapActionToProps = {
    createPostMessage:Actions.create,
    updatePostMessage:Actions.update,
};

export default connect(
  mapStateTProps,
  mapActionToProps
)(withStyles(styles)(PostMessageForm));
