import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import GlobalToast from "../../../shared/toast-options";
import { useUser } from "../../../providers/user-provider";
import { UserModel } from "../../models/user/user-model";
import { UserProps, userSchema } from "../../../shared/validations/user-validation";

interface Iprop {
    cancelFun: () => void;
}

const AddUserPopup: React.FC<Iprop> = ({ cancelFun }) => {
    const { addUser } = useUser();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<UserProps>({
        resolver: yupResolver(userSchema),
        mode: "all",
        reValidateMode: "onChange",
    });

    const onSubmit = async (formValues: UserProps) => {
        const userData: UserModel = {
            id: 0,
            fullName:formValues.fullName??"",
            phoneNumber:formValues.phoneNumber??"",
            email:formValues.email,
            birthdate:formValues.birthdate??"",
            jobTitle:formValues.jobTitle??""
        };
        const result = await addUser(userData);

        if (result == "Success") {
            toast.success("User Add Successfully", GlobalToast.getOptions());
            cancelFun();
        } else {
            toast.error(result, GlobalToast.getOptions());
        }
    };

    return (
        <div className="modal special-modal fade show" role="dialog" style={{ paddingRight: "10px", display: "block" }}>
            <div className="modal-dialog animate bounceInDown animated" style={{ width: "75%" }}>
                <div className="modal-content special-content">
                    <div className="modal-body topics-units create-live explain">
                        <div className="row col-md-12 col-sm-12 topics-units create-live explain mrg">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className="mail-setting-title Clr1"> User Information</h1>

                                <div className='row'>
                                    <div className="col">
                                        <div className="form-group">
                                            <div>
                                                <label>Full Name</label>
                                                <input {...register("fullName")} className="input-text3 form-control" placeholder="Full Name" />
                                                <div
                                                    className="invalid-feedback"
                                                    style={{
                                                        display: errors?.fullName?.message ? "block" : "none",
                                                    }}
                                                >
                                                    {errors?.fullName?.message}
                                                </div>
                                            </div>

                                            <div>
                                                <label>Email</label>
                                                <input {...register("email")} className="input-text3 form-control" placeholder="Email" />
                                                <div
                                                    className="invalid-feedback"
                                                    style={{
                                                        display: errors?.email?.message ? "block" : "none",
                                                    }}
                                                >
                                                    {errors?.email?.message}
                                                </div>
                                            </div>


                                            <div>
                                                <label>Phone Number</label>
                                                <input {...register("phoneNumber")} className="input-text3 form-control" placeholder="Phone Number" />
                                                <div
                                                    className="invalid-feedback"
                                                    style={{
                                                        display: errors?.phoneNumber?.message ? "block" : "none",
                                                    }}
                                                >
                                                    {errors?.phoneNumber?.message}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='row'>
                                    <div className="col">
                                        <div className="form-group">
                                            <div>
                                                <label>Job Title</label>
                                                <input {...register("jobTitle")} className="input-text3 form-control" placeholder="Job Title" />
                                                <div
                                                    className="invalid-feedback"
                                                    style={{
                                                        display: errors?.jobTitle?.message ? "block" : "none",
                                                    }}
                                                >
                                                    {errors?.jobTitle?.message}
                                                </div>
                                            </div>

                                            <div>
                                                <label>Birthdate</label>
                                                <input {...register("birthdate")} className="input-text3 form-control" placeholder="Birthdate" />
                                                <div
                                                    className="invalid-feedback"
                                                    style={{
                                                        display: errors?.birthdate?.message ? "block" : "none",
                                                    }}
                                                >
                                                    {errors?.birthdate?.message}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="modal-footer sure">
                                    <button type="submit" disabled={isSubmitting} className="btn BgClr8 ok">
                                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                        Add
                                    </button>
                                    <button type="button" className="btn cancel" onClick={cancelFun}>
                                        cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUserPopup;
