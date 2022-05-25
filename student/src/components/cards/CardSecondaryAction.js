import PropTypes from "prop-types";
import React from "react";

// material-ui
import { ButtonBase, Tooltip } from "@material-ui/core";

// project imports
import Avatar from "../extended/Avatar";

// ===========================|| CARD SECONDARY ACTION ||=========================== //

const CardSecondaryAction = ({ title, icon, handleAction }) => {
  return (
    <Tooltip title={title} placement="left">
      <ButtonBase disableRipple onClick={handleAction}>
        <Avatar size="badge" color="primary" outline>
          {icon}
        </Avatar>
      </ButtonBase>
    </Tooltip>
  );
};

CardSecondaryAction.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default CardSecondaryAction;
