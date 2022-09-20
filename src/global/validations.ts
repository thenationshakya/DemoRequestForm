import * as yup from "yup";

export const ContactValidationSchema = yup.object().shape({
  contact: yup.string().email().required("Contact Email is required"),
});

export const OsValidationSchema = yup.object().shape({
  os: yup.string().required("Operating system is required"),
});
