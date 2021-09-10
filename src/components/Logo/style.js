import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  heading: {
    fontSize: "100px",
    margin: "0",
    marginBottom: "50px",
    color: "#3F51B5",
  },
  tagline: {
    position: "absolute",
    right: 0,
    top: -40,
  },
}));
