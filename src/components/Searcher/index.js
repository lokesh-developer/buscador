import { createTheme, InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Logo } from "../Logo";
import { useStyles } from "./style";

export const Searcher = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Logo />
        <form className={classes.form}>
          <TextField
            className={classes.search}
            id="outlined"
            label="Search"
            variant="outlined"
            focused={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search style={{ color: "#3F51B5" }} />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
    </>
  );
};
