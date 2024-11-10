import { useForm } from "react-hook-form";

interface Iprop {
  confirmFun: () => void;
  cancelFun: () => void;
  message: string;
}

const GlobalAlertPopus: React.FC<Iprop> = ({ confirmFun, cancelFun, message }) => {
  const {
    formState: { isSubmitting },
  } = useForm();
  return (
    <div className="modal special-modal fade show" role="dialog" style={{ paddingRight: "10px", display: "block" }}>
      <div className="modal-dialog animate bounceInDown animated" style={{ width: "37%" }}>
        <div className="modal-content special-content">
          <div className="modal-header special-box-content arc-head">
            <i className="post-icon fas fa-exclamation-triangle"></i>
            <h4 className="modal-title">confirm</h4>
          </div>
          <div className="modal-body">
            <div className="col-md-12 col-lg-12">
              <div className="sure">
                <img src="/Assets/img/sure.png" />
                <h1>{message}</h1>
              </div>
            </div>
          </div>
          <div className="modal-footer sure">
            <button disabled={isSubmitting} type="submit" className="btn BgClr8 ok" onClick={confirmFun}>
            {isSubmitting && <span className='spinner-border spinner-border-sm mr-1'></span>}
              confirm
            </button>
            <button type="button" className="btn cancel" onClick={cancelFun}>
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalAlertPopus;
