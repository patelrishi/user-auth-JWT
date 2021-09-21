import React from "react";
import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    width: "46%",
    margin: 10,
    borderRadius: 15,
    boxShadow: "0px 9.53425px 76.274px rgb(26 0 80 / 9%)",
    backgroundColor: "#ffffff",
  },
  title: {
    margin: "20px 0 !important",
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RenderData = ({ elem }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" className={classes.title}>
          {elem.title}
        </Typography>
        <Typography color="text.secondary" paragraph>
          {elem.body}
        </Typography>
      </CardContent>
    </div>
  );
};

export default RenderData;
