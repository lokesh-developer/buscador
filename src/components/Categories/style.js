import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "90%",
    overflowX: "scroll",
  },
  categories: {
    backgroundColor: "#3F51B5",
    width: "fit-content",
    padding: "0px 20px",
    height: "fit-content",
    cursor: "pointer",
    margin: "10px",
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
}));
