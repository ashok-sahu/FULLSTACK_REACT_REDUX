import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Paper,
  withStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import {DeleteSweep} from '@material-ui/icons'
import ButterToast ,{Cinnamon} from 'butter-toast'
import * as Actions from "../actions/postMessage";
import PostMessageForm from "./PostMessageForm";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  smMargin: { margin: theme.spacing(2) },
  actionDiv: {
    textAlign: "center",
  },
});

const PostMessage = ({ classes, ...props }) => {
  const [currentId, setcurrentId] = useState(0);
  useEffect(() => {
    props.fetchallPostMessages();
  }, []);

  const handleDelete = (id) => {
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Post Box"
            content="deleted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            icon={<DeleteSweep />}
          />
        ),
      });
    };
    if (window.confirm("Are you sure to delete this record?"))
      props.deletePostMessage(id, onSuccess);
  };
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <PostMessageForm {...{ currentId, setcurrentId }} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <List>
            {props.postMessageList.map((record, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h5">{record.title}</Typography>
                      <div>{record.message}</div>
                      <div className={classes.actionDiv}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className={classes.smMargin}
                          onClick={() => setcurrentId(record._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          className={classes.smMargin}
                          onClick={() => handleDelete(record._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </ListItemText>
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              );
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateTProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  fetchallPostMessages: Actions.fetchAll,
  deletePostMessage: Actions.Delete,
};

export default connect(
  mapStateTProps,
  mapActionToProps
)(withStyles(styles)(PostMessage));
