import React from "react";
import { Provider } from "react-redux";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";
import { store } from "./actions/store";

import PostMessage from "./components/PostMessage";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h5" align="center">
            Post Box
          </Typography>
        </AppBar>
        <PostMessage />
        <ButterToast
          position={{ vertical: POS_TOP, horizontal: POS_RIGHT }}
        />
      </Container>
    </Provider>
  );
}

export default App;
