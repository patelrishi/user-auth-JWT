import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import RenderData from "./RenderData";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    width: 150,
    border: "1px solid black",
    borderRadius: 12,
  },
  styles: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "40vh",
    overflow: "auto",
    margin: "20px 0",
  },
  uploadButton: {},
}));
const UploadScreen = () => {
  const classes = useStyles();
  const [files, setFiles] = useState("");
  const handleChange = (e) => {
    // e.preventDefault();
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        console.log("e.target.result", e.target.result);
        setFiles(JSON.parse(e.target.result));
      };
    }
  };

  return (
    <div>
      <div>
        <h3 style={{ marginBottom: 0 }}>Upload Json file</h3>
        <input
          type="file"
          onChange={handleChange}
          className={classes.uploadButton}
        />
        {files.length !== 0 && (
          <div className={classes.styles}>
            {files.length !== 0 &&
              files.map((elem) => <RenderData elem={elem} />)}
          </div>
        )}

        <br />
      </div>
    </div>
  );
};

export default UploadScreen;
