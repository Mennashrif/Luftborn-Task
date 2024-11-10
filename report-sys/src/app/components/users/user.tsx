import UserProvider from "../../providers/user-provider";
import UserHeader from "./user-header";
import UserTable from "./user-table";

const User: React.FC = () => {
    return (
        <div className='container-fluid'>
            {localStorage.getItem('role') == "Manager" ? <div>
                <UserHeader />
                <UserTable />
            </div> : <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                color: 'red',
                fontSize: '24px',
                fontWeight: 'bold'
            }}>"User Has No Access"</div>}

        </div>
    );
};

export default () => {
    return (
        <UserProvider>
            <User />
        </UserProvider>
    );
};
