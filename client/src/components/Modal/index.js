import React from "react";
import {
  List,
  ListItem,
  Menu,
  ListItemAvatar,
  ListItemText,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button
} from "@mui/material";
import Field from "../Field";

export function MenuComponent(props) {
  const { onClose, list, anchorEl } = props;
  const open = Boolean(anchorEl);
  return (
    <Menu
      open={open}
      id="menu"
      anchorEl={anchorEl}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "button",
      }}
    >
      <List sx={{ pt: 0 }}>
        {list.map((elm, index) => (
          <ListItem key={index} onClick={() => elm.action}>
            <ListItemAvatar>{elm.icon}</ListItemAvatar>
            <ListItemText>{elm.label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Menu>
  );
}

export function DialogFormComponent(props) {
  const { onClose, open, filmsField, handleChange, handleSubmit } = props;

  return (
    <Dialog onClose={onClose} open={open} maxWidth={"sm"}>
      <DialogTitle>{"Thêm phim"}</DialogTitle>
      <DialogContent sx={{display: 'flex', flexWrap: 'wrap'}}>
        {filmsField &&
          filmsField.map((elm) => (
            <Field
              key={elm.key}
              name={elm.key}
              label={elm.label}
              width={elm.width}
              value={elm.value}
              type={elm.type}
              handleChange={handleChange}
            />
          ))}
      </DialogContent>
      <DialogActions>
        <Button>Hủy</Button>
        <Button variant="contained" onClick={handleSubmit}>Thêm</Button>
      </DialogActions>
    </Dialog>
  );
}
