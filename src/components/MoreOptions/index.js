import { useState } from "react";
import { useStyles } from "./style";
import { IconButton, Tooltip, Backdrop, Grow } from "@material-ui/core";
import { MoreVert, Close, Favorite, AccountCircle } from "@material-ui/icons";

export const MoreOptions = () => {
  const classes = useStyles();
  const [optionOpen, setOptionOpen] = useState(false);
  // const [favoriteOpen, setFavoriteOpen] = useState(false);
  // const [accountOpen, setAccountOpen] = useState(false);
  const openOptions = () => {
    setOptionOpen(!optionOpen);
  };
  const openFavorite = () => {
    console.log("Favorite");
  };
  const openAccount = () => {
    console.log("Account");
  };
  return (
    <div className={classes.root}>
      <Tooltip title="More options" placement="left" aria-label="more-options">
        <IconButton
          onClick={openOptions}
          aria-label="delete"
          className={classes.more}
        >
          {optionOpen ? <Close /> : <MoreVert />}
        </IconButton>
      </Tooltip>
      {optionOpen ? (
        <Backdrop
          open={optionOpen}
          className={classes.moreOptions}
          onClick={openOptions}
        >
          <div className={classes.moreContains}>
            <Grow
              in={optionOpen}
              style={{ transformOrigin: "0 0 0" }}
              {...(optionOpen ? { timeout: 1000 } : {})}
            >
              <Tooltip
                title="Favourites"
                placement="left"
                aria-label="favourites"
              >
                <IconButton
                  onClick={openFavorite}
                  aria-label="delete"
                  className={classes.moreContainButtons}
                >
                  <Favorite />
                </IconButton>
              </Tooltip>
            </Grow>
            <Grow
              in={optionOpen}
              style={{ transformOrigin: "0 0 0" }}
              {...(optionOpen ? { timeout: 2000 } : {})}
            >
              <Tooltip title="Account" placement="left" aria-label="account">
                <IconButton
                  onClick={openAccount}
                  aria-label="delete"
                  className={classes.moreContainButtons}
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            </Grow>
          </div>
        </Backdrop>
      ) : null}
    </div>
  );
};
