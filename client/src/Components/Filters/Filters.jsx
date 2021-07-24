import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionDetails, Checkbox } from "@material-ui/core";

const genre = [
  {
    idx: 1,
    name: "Hip Hop",
  },
  {
    idx: 2,
    name: "Rock",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    // zIndex: 5,
    display: "flex",
    flexWrap: "wrap",
    overflowX: "hidden",
    gap: "15px",
    margin: "auto 90px",
  },

  main: {
    width: "20%",
    border: "1px solid black",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
}));

export const Filters = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  console.log(value);
  return (
    <div className={classes.root}>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Genre</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.options}>
            {genre.map((el) => (
              <div>
                <Checkbox
                  // defaultChecked
                  // checked={checked.indexOf(el.name) !== -1}
                  value={el.name}
                  onChange={(e) => setValue(e.target.value)}
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <span>{el.name} </span>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
