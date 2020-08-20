import { Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Dashboard as DashboardIcon } from "@material-ui/icons";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";

import { FieldInput } from "../../components";
import { authService } from "../../services";

import { useAlert } from "../hooks";
import validationSchema from "./validationSchema";

enum FIELDS {
  email = "email",
  password = "password",
}

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "350px",
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  wrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    height: "fit-content",
    maxWidth: "600px",
    maxHeight: "600px",
  },
  spinner: {
    color: "white",
    height: "25px !important",
    width: "25px !important",
  },
}));

interface Values {
  [FIELDS.email]: string;
  [FIELDS.password]: string;
}

const initialValues: Values = {
  [FIELDS.email]: "",
  [FIELDS.password]: "",
};

const Login = () => {
  const classes = useStyles();
  const { t } = useTranslation("auth");
  const alerts = useAlert();

  const submit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    authService
      .login(values)
      .then(() => {
        setSubmitting(false);
      })
      .catch((err: Error) => {
        alerts.error(err.message);
        setSubmitting(false);
      });
  };

  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src="/assets/login.png" alt="login" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({ isSubmitting }) => {
          return (
            <Form className={classes.form}>
              <FieldInput
                name={FIELDS.email}
                label={t("login.fields.email")}
                type="email"
              />
              <FieldInput
                name={FIELDS.password}
                label={t("login.fields.password")}
                type="password"
              />
              <Button
                size="large"
                startIcon={!isSubmitting && <DashboardIcon />}
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                {isSubmitting ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  t("login.fields.login")
                )}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
