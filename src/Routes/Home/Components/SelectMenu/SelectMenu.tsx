import React, { useState } from "react";
import "./SelectMenu.css";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { ISelectMenuProp } from "../../../../interfaces";

const SelectMenu: React.FC<ISelectMenuProp> = (props) => {
  const [selectedVal, setSelectedVal] = useState("");

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: "#fff",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const handleChange = (event: any) => {
    setSelectedVal(event.target.value);
    props.ValueUpdater(event.target.value);
  };

  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          labelId={props.Label}
          id={props.Label}
          value={selectedVal}
          onChange={handleChange}
          autoWidth
        >
          {props.MenuOptions.map((Option: string, Idx: number) => (
            <MenuItem key={`${props.Label} ${Idx}`} value={Option}>
              {Option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectMenu;
