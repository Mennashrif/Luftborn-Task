import axios from 'axios';
import { createContext, useState, useContext, FC } from 'react';
import { ResponseModel } from '../components/models/shared/response-model';
import { UserModel } from '../components/models/user/user-model';
import { userUrl } from '../shared/apis';

export type contextProbType = {
  users: UserModel[];

  getAllUsers: () => Promise<string>;
  addUser: (value: UserModel) => Promise<string>;
  editUser: (value: UserModel) => Promise<string>;
  deleteUser: (id: number) => Promise<string>;
};

const contextProb: contextProbType = {
  users: [],

  getAllUsers: () => {
    return Promise.resolve("");
  },
  addUser: (value: UserModel) => {
    return Promise.resolve("");
  },
  editUser: (value: UserModel) => {
    return Promise.resolve("");
  },
  deleteUser: (id: number) => {
    return Promise.resolve("");
  },

};

export const UserContext = createContext<contextProbType>(contextProb);
export const useUser = () => useContext(UserContext);

const UserProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<UserModel[]>(contextProb.users);

  const getAllUsers = async (): Promise<string> => {
    try {
      const { data } = await axios.get<ResponseModel>(userUrl );
      if ( data.isSuccess) {
        
        setUsers(data.data as UserModel[]);
        }
      return "Success";
    } catch (err) {
      return 'anErrorOccurredPleaseContactSystemAdministrator';
    }
  };

  const addUser = async (value: UserModel) => {
    try {
      const { data } = await axios.post<ResponseModel>(userUrl, value);
      if (data.isSuccess) {
        getAllUsers();
      }
      return "Success";
    } catch (err) {
      return "An Error Occurred Please Contact System Administrator";
    }
  };

  const editUser = async (value: UserModel) => {
    try {
      const { data } = await axios.put<ResponseModel>(userUrl, value);
      if (data.isSuccess) {
        getAllUsers();
      }
      return "Success";
    } catch (err) {
      return "An Error Occurred Please Contact System Administrator";
    }
  };

  const deleteUser = async (id: number): Promise<string> => {
    try {
      const { data } = await axios.delete<ResponseModel>(userUrl + '/' + id);
      if (data.isSuccess) {
        getAllUsers();
      }
      return "success";
    } catch (err) {
      return 'An Error Occurred Please Contact System Administrator';
    }
  };


  return <UserContext.Provider value={{ users, getAllUsers, addUser, editUser, deleteUser}}>{children}</UserContext.Provider>;
};

export default UserProvider;
