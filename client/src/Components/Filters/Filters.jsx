import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionDetails, Checkbox } from "@material-ui/core";
import axios from "axios";

const Genres = [
  {
    idx: 1,
    name: "rap",
  },
  {
    idx: 2,
    name: "rock",
  },
];

const Sort = [
  {
    value: "asc",
    name: "older to newest",
  },
  {
    value: "desc",
    name: "newer to oldest",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    // zIndex: 5,
    display: "flex",
    flexWrap: "wrap",
    overflowX: "hidden",
    gap: "15px",
    marginLeft: "auto",
    marginRight: "auto",
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

export const Filters = ({ setAlbums }) => {
  const classes = useStyles();
  const [genre, setGenre] = React.useState("");
  const [order, setOrder] = React.useState("");

  const handleChangeGenre = (e) => {
    if (e.target.checked) {
      setGenre(e.target.value);

      axios
        .get("http://localhost:5000/album/genre", {
          params: {
            genre,
          },
        })
        .then((res) => setAlbums(res.data));
    } else {
      axios.get("http://localhost:5000/album").then((res) => {
        setAlbums(res.data.albums);
      });
    }
  };

  const handleChangeSort = (e) => {
    setOrder(e.target.value);
    if (e.target.checked) {
      if (order === "asc") {
        axios
          .get("http://localhost:5000/album/asc")
          .then((res) => setAlbums(res.data));
      } else if (order === "desc") {
        axios
          .get("http://localhost:5000/album/desc")
          .then((res) => setAlbums(res.data));
      }
    } else {
      axios.get("http://localhost:5000/album").then((res) => {
        setAlbums(res.data.albums);
      });
    }
  };

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
            {Genres.map((el) => (
              <div key={el.name}>
                <Checkbox
                  value={el.name}
                  onChange={(e) => handleChangeGenre(e)}
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <span>{el.name} </span>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>

      {/*Sort Year  */}

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Sort By Year</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.options}>
            {Sort.map((el) => (
              <div key={el.value}>
                <Checkbox
                  value={el.value}
                  onChange={(e) => handleChangeSort(e)}
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
