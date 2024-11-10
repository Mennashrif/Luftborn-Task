import React, { useEffect } from "react";
import { useGlobal } from "../../providers/global-provider";

const Profile: React.FC = () => {
   const { getLogginedUser,logginedUser } = useGlobal();

   useEffect(() => {
      (async () => {
        await getLogginedUser();
      })();
    }, []);

   return (
      <div className='container-fluid'>
         <div className='row'>
            <div className='col-md-12 col-sm-12 main-body-header'>
               <div className='Main-Head-Title'>
                  <i className='fas fa-user'></i>
                  <h1>personal Profile</h1>
               </div>
            </div>
         </div>
         <div className="col-md-6 col-sm-12 ">
            <div>
               <div className="form-group">
                  <div className="d-flex">
                     <label className="prof">
                        <i className="fas fa-user"></i>
                        User Name :{" "}
                     </label>
                     <h2 className="pers-inf"> {logginedUser?.fullName}</h2>
                  </div>
               </div>
               <div className="form-group">
                  <div className="d-flex">
                     <label className="prof">
                        <i className="far fa-calendar-alt"></i>
                        birth Date :{" "}
                     </label>
                     <h2 className="pers-inf">{logginedUser?.birthdate}</h2>
                  </div>
               </div>
               <div className="form-group">
                  <div className="d-flex">
                     <label className="prof">
                        <i className="far fa-envelope"></i>
                        Email :{" "}
                     </label>
                     <h2 className="pers-inf">{logginedUser?.email}</h2>
                  </div>
               </div>
               <div className="form-group">
                  <div className="d-flex">
                     <label className="prof">
                        <i className="fas fa-briefcase"></i>
                        Job Title :{" "}
                     </label>
                     <h2 className="pers-inf">{logginedUser?.jobTitle}</h2>
                  </div>
               </div>
               <div className="form-group">
                  <div className="d-flex">
                     <label className="prof">
                        <i className="fas fa-mobile-alt"></i> Mobile :{" "}
                     </label>
                     <h2 className="pers-inf">{logginedUser?.phoneNumber}</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Profile;