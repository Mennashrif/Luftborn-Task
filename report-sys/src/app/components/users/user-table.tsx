import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import GlobalToast from '../../shared/toast-options';
import UserTableHeader from './user-table-header';
import UserTableRow from './user-table-row';
import { useUser } from '../../providers/user-provider';
import AddUserPopup from './popups/add-user-popup';

const ArchivesTable: React.FC = () => {
    const { users, getAllUsers } = useUser();
    const navigate = useNavigate();
    const [addUserPopupHtml, setAddUserPopupHtml] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            var result = await getAllUsers();
            if (result == 'hasnotAccess') {
                toast.error('Has Not Access', GlobalToast.getOptions());
                navigate('/');
            }
        })();
    }, []);

    return (
        <div className='row animate__animated animate'>
            <div className='col-md-12 col-sm-12'>
                <div className='table-responsive'>
                    <table className='table special-table  inspector-table  table-fixed'>
                        <tbody>
                            <a
                                onClick={() => {
                                  setAddUserPopupHtml(true);
                                }}
                                className='c-1 Add-new-row btn btn-2'
                                title="Add User"
                            >
                                <i className='fas fa-plus'></i>
                            </a>
                            <UserTableHeader />

                            {users?.map((user) => (
                                <UserTableRow key={user?.id} user={user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {addUserPopupHtml ? <AddUserPopup cancelFun={() => setAddUserPopupHtml(false)} /> : null}

        </div>
    );
};
export default ArchivesTable;
