import { Backdrop } from "@material-ui/core";
import { Searcher, TeleLogin } from "./components";
import { useStyles } from "./style";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  return (
    <>
      {user ? (
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
