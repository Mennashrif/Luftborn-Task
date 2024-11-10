import axios from 'axios';
import { createContext, useContext, FC, useState } from 'react';
import { userProfileUrl } from '../shared/apis';
import { ResponseModel } from '../components/models/shared/response-model';
import { UserModel } from '../components/models/user/user-model';

export type contextProbType = {
  logginedUser?: UserModel;
  getLogginedUser: () => Promise<string>;
};

const contextProb: contextProbType = {
  logginedUser: new UserModel(0, '', '','','',''),

  getLogginedUser: () => {
    return Promise.resolve("");
  },

};

export const globalContext = createContext<contextProbType>(contextProb);
export const useGlobal = () => useContext(globalContext);

const GlobalProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logginedUser, setLogginedUser] = useState<UserModel>();

  const getLogginedUser = async () => {
    try {
      const { data } = await axios.get<ResponseModel>(userProfileUrl);
      if (data.isSuccess) {
        setLogginedUser(data.data as UserModel);
      }
      return "Success";
    } catch (err) {
      return 'An Error Occurred Please Contact System Administrator';
    }
  };

  return <globalContext.Provider value={{ logginedUser, getLogginedUser }}>{children}</globalContext.Provider>;
};

export default GlobalProvider;
