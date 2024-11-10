import { useUser } from "../../providers/user-provider";

const UserHeader: React.FC = () => {
    const { users } = useUser();

  return (
    <div className="col-md-12 col-sm-12 main-body-header border-btm">
      <div className="Main-Head-Title">
        <i className="fas fa-folder-plus"></i>
        <h1>the Users</h1>
      </div>
      <div className="d-flex">
        <h1 className="total">
          {" "}
          Items Total : {users?.length}
        </h1>
      </div>
    </div>
  );
};
export default UserHeader;
