import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import FileBase64 from "react-file-base64";

export default function Field(props) {
  const { name, label, width, value, type, handleChange } = props;

  if (type === "date") {
    return (
      <Grid xs={width} sx={{ margin: "10px 2px" }}>
        <TextField
          name={name}
          label={label}
          InputLabelProps={{ shrink: true, required: true }}
          type="date"
          variant="outlined"
          value={value}
          onChange={(e) => handleChange(name,e, type)}
          fullWidth
        />
      </Grid>
    );
  }
  if (type === "file") {
    return (
      <Grid xs={width}>
        <Button component="label">
          {value?'img':'+ Poster'}
          <div style={{visibility: 'hidden'}}>
            <FileBase64
              accept="image/*"
              multiple={false}
              type="file"
              value={value}
              onDone={({ base64 }) => handleChange(name,base64,type)}
            />
          </div>
        </Button>
      </Grid>
    );
  }
  return (
    <Grid xs={width} sx={{ margin: "10px 2px" }}>
      <TextField
        name={name}
        label={label}
        InputLabelProps={{ shrink: true, required: true }}
        type="text"
        variant="outlined"
        value={value}
        onChange={(e) => handleChange(name, e, type)}
        fullWidth
      />
    </Grid>
  );
}
