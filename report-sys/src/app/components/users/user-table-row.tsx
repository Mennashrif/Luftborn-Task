import { useState } from 'react';
import { toast } from 'react-toastify';
import GlobalToast from '../../shared/toast-options';
import { UserModel } from '../models/user/user-model';
import GlobalAlertPopus from '../common/shared-popups/global-alert-popus';
import { useUser } from '../../providers/user-provider';
import EditUserPopup from './popups/edit-user-popup';

interface Iprop {
  user: UserModel;
}

const UserTableRow: React.FC<Iprop> = ({ user }) => {
  const [deletePopupHtml, setDeletePopupHtml] = useState<boolean>(false);
  const [editPopupHtml, setEditPopupHtml] = useState<boolean>(false);
  const { deleteUser } = useUser();

  const deletedConfirmed = async () => {
    const result = await deleteUser(user.id);
    if (result == "success") toast.success("User Deleted Successfully", GlobalToast.getOptions());
    else toast.error(result, GlobalToast.getOptions());
    setDeletePopupHtml(false);
  };

  return (
    <tr>
      <td>{user.fullName}</td>
      <td>{user.birthdate}</td>
      <td>{user.email}</td>
      <td>{user.jobTitle}</td>
      <td>{user.phoneNumber}</td>
      <td className='acc-ref-btn'>
        <a onClick={() => setDeletePopupHtml(true)} className=' btn btn-5' title='Delete'>
          {' '}
          <i className='far fa-trash-alt'></i>{' '}
        </a>

        <a onClick={() => setEditPopupHtml(true)} className=' btn btn-2' title='Delete'>
          {' '}
          <i className='fa fa-pencil-alt'></i>{' '}
        </a>
      </td>

      {editPopupHtml ? <EditUserPopup  cancelFun={() => setEditPopupHtml(false)} user= {user}/> :''}
      
      {deletePopupHtml ? <GlobalAlertPopus confirmFun={deletedConfirmed} cancelFun={() => setDeletePopupHtml(false)} message='are You Sure For This Operation' /> :''}
    </tr>
  );
};
export default UserTableRow;
