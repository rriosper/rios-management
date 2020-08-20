import { object, string } from "yup";

const validationSchema = object()
  .shape({
    email: string().trim().required().email(),
    password: string().trim().required().min(6),
  })
  .required();

export default validationSchema;
