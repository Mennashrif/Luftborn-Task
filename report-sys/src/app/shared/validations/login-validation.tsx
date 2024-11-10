import { object, string, InferType, ref, number } from "yup";
// import { number, array, TypeOf } from "yup";
export const loginSchema = object({
  email: string().required("Email Is Required"),
  password: string().required("Password Is Required"),
});

export type loginProps = InferType<typeof loginSchema>;
