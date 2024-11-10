import axios from "axios";
import { ResponseModel } from "../components/models/shared/response-model";
import {  loginUrl,} from "../shared/apis";

export class LoginService {

  login = async (email: string, password: string): Promise<ResponseModel> => {
    try {
      const { data } = await axios.post<ResponseModel>(loginUrl, {
        email: email,
        password: password,
      });
      return data;
    } catch (err) {
      return { errorMessage: "An Error Occurred Please Contact System Administrator", data: {},isSuccess:false };
    }
  };
  
}
