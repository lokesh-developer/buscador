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
    color: "#54A9EB",
  },
  tagline: {
    position: "absolute",
    right: 0,
    top: -40,
  },
}));
