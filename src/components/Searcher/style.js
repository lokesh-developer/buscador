import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  form: {
    width: "50%",
  },
  search: {
    borderRadius: "100%",
    width: "100%",
  },
}));
