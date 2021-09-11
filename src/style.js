import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  moreOptions: {
    zIndex: theme.zIndex.drawer + 1,
  },
  teleButton: {
    zIndex: theme.zIndex.drawer + 2,
  },
}));
