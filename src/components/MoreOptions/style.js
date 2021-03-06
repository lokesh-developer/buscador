import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
  },
  more: {
    margin: theme.spacing(1),
    backgroundColor: "#54A9EB",
    color: "white",
    "&:hover": {
      backgroundColor: "#54A9EB",
    },
    zIndex: theme.zIndex.drawer + 2,
  },
  moreOptions: {
    zIndex: theme.zIndex.drawer + 1,
  },
  moreContains: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",

    bottom: "14%",
    right: "5%",
  },
  moreContainButtons: {
    margin: theme.spacing(1),
    backgroundColor: "#54A9EB",
    color: "white",
    "&:hover": {
      backgroundColor: "#54A9EB",
    },
    zIndex: theme.zIndex.drawer + 3,
  },
}));
