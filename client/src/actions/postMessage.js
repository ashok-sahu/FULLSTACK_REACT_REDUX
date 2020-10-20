import Api from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  Api.postMessage()
    .fetchAll()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response));
};

export const create = (data, onSuccess) => (dispatch) => {
  Api.postMessage()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const update = (id, data, onSuccess) => (dispatch) => {
  Api.postMessage()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Delete = (id, data, onSuccess) => (dispatch) => {
  Api.postMessage()
    .delete(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};
