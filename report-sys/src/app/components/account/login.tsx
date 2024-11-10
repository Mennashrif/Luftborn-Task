import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import GlobalToast from "../../shared/toast-options";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginProps, loginSchema } from "../../shared/validations/login-validation";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../../services/login-service";

const Login = () => {
  const navigate = useNavigate();
  const loginService: LoginService = new LoginService();
  const [passwordShown, setPasswordShown] = useState(false);


  useEffect(() => {
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginProps>({
    resolver: yupResolver(loginSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit = async (formValues: loginProps) => {
    const result = await loginService.login(formValues.email, formValues.password);

    if (result.isSuccess) {
        let authResult: any = result.data;
        localStorage.setItem('token', authResult.token);
        localStorage.setItem('role',authResult.role);
        window.location.href = '/';
    } else toast.error(result.errorMessage, GlobalToast.getOptions());
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="bgimg-intro">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="form-content-box margin_top animate__animated animate__fadeInDown">
              <div className="details box-border">
                <form noValidate className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <i className="fa fa-user input-icon"></i>
                    <input type="text" {...register("email")} name="email" className="input-text1" placeholder={"Email"} required />
                    <div
                      className="invalid-feedback"
                      style={{
                        display: errors?.email?.message ? "block" : "none",
                      }}
                    >
                      {errors?.email?.message}
                    </div>
                  </div>
                  <div className="form-group">
                    <i className="fas fa-unlock-alt input-icon"></i>
                    <input type={passwordShown ? "text" : "password"}  className="input-text1" placeholder={"Password"} required {...register("password")} />
                    <span className="eye-icon">
                      <i className={passwordShown ? "fas fa-eye" : "fas fa-eye-slash"} onClick={togglePasswordVisiblity}></i>
                      </span>
                    <div
                      className="invalid-feedback"
                      style={{
                        display: errors?.password?.message ? "block" : "none",
                      }}
                    >
                      {errors?.password?.message}
                    </div>
                  </div>
                  <div className="form-group submit  mb-0">
                    <button disabled={isSubmitting} className="btnx1 btn-1" type="submit">
                      {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                      {"Enter"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
