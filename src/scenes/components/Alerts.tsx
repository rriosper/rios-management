import { makeStyles } from "@material-ui/core/styles";
import styled from "@xstyled/styled-components";
import { map } from "ramda";
import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { borderColor } from "@xstyled/system";
import { ALERT_TYPES } from "../../constants";
import { selectors, actions } from "../../store";
import { RiosManagement } from "../../types";

const ALERT_COLORS = {
  [ALERT_TYPES.error]: "#f44336",
  [ALERT_TYPES.success]: "#81c784",
  [ALERT_TYPES.info]: "#2196f3",
  [ALERT_TYPES.warning]: "#ffb74d",
};

const SAlert = styled.div<{ borderColor: string }>`
  width: 100%;
  max-width: 600px;
  background-color: #ffffffc7;
  padding: 16px 12px;
  margin-bottom: 8px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
  border-top: 6px solid;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  ${borderColor};

  :hover {
    background-color: #fff;
  }
`;

const timers: { [key: string]: number | NodeJS.Timeout } = {};

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      position: "fixed",
      top: theme.spacing(1),
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

const Alert: React.FC<RiosManagement.Alert> = ({
  id,
  type,
  message,
  callback,
}: RiosManagement.Alert) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const color = ALERT_COLORS[type];
  const close = () => {
    dispatch(actions.creators.alert.close(id));
    if (callback) {
      callback();
    }
  };

  useEffect(() => {
    if (!timers[id]) {
      timers[id] = setTimeout(() => {
        close();
      }, 3000);
    }
  });

  return (
    <SAlert borderColor={color} onClick={close} key={id}>
      {t(message)}
    </SAlert>
  );
};

const AlertMemo = memo(Alert);

const Alerts: React.FC<{}> = () => {
  const classes = useStyles();
  const alerts = useSelector(selectors.alerts.root);

  const processedAlerts = map(
    (props: RiosManagement.Alert) => <AlertMemo key={props.id} {...props} />,
    alerts
  );

  return <div className={classes.wrapper}>{processedAlerts}</div>;
};

export default Alerts;
