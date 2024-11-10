
export class UserModel {
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  jobTitle: string;
  birthdate: string;
  constructor(
    id: number,
    email: string,
    fullName: string,
    phoneNumber: string,
    jobTitle: string,
    birthdate: string
  ) {
    this.id = id;
    this.email = email;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.jobTitle = jobTitle;
    this.birthdate = birthdate;
  }
}
