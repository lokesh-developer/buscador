import { useEffect, useState } from "react";
import { Backdrop } from "@material-ui/core";
import { Searcher, TeleLogin } from "./components";
import { useStyles } from "./style";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    user === null ? setLogin(false) : setLogin(true);
  }, [user]);

  return (
    <>
      {login ? (
        <>
          <TeleLogin />
          <Searcher />
        </>
      ) : (
        <>
          <Backdrop open={true} className={classes.moreOptions}>
            <div className={classes.teleButton}>
              <TeleLogin />
            </div>
          </Backdrop>
        </>
      )}
    </>
  );
}

export default App;
