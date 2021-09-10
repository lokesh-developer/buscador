import { useStyles } from "./style";

export const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.tagline}>Your one and only search engine.</p>
      <h1 className={classes.heading}>Buscador</h1>
    </div>
  );
};
