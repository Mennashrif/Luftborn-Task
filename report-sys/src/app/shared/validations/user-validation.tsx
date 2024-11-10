import { object, string, InferType, number } from "yup";

export const userSchema = object({
  fullName: string(),
  phoneNumber: string().matches(/^01[0-2]\d{1,8}$/,"Phone Must Be AValid Phone Number"),
  email:string().email("email Must Be AValid Email Address").required("email Is Required"),
  birthdate:string(),
  jobTitle:string(),
});
export type UserProps = InferType<typeof userSchema>;
