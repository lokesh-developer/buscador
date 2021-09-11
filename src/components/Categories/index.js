import { Paper, Tooltip } from "@material-ui/core";
import { useStyles } from "./style";
import { categories } from "../../lib/categories";

export const Categories = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {categories.map((category, index) => (
        <Tooltip key={index} title={category} aria-label={category}>
          <Paper elevation={2} className={classes.categories}>
            <p>{category}</p>
          </Paper>
        </Tooltip>
      ))}
    </div>
  );
};
