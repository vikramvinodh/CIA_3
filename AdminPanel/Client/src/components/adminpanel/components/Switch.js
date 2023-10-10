import React from "react";
import { useNavigate } from "react-router-dom";
import * as bi from 'react-icons/bi';

export function EditSwitch(prop) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`../edit/${prop.prop}`);
  };

  return (
    <bi.BiPencil  className="text-success" cursor="pointer" onClick={routeChange}
      data-toggle="tooltip" data-placement="bottom" title="Edit" />
  );
}

export function EditSwitchtrainer(prop) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`../trainer-edit/${prop.prop}`);
  };

  return (
    <bi.BiPencil  className="text-success" cursor="pointer" onClick={routeChange}
      data-toggle="tooltip" data-placement="bottom" title="Edit" />
  );
}

