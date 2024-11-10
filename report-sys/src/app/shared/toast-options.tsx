import { ToastOptions } from "react-toastify";

export default class GlobalToast {
  static getOptions = (): ToastOptions => {
    return {
      position: localStorage.getItem("i18nextLng") === "ar" ? "top-left" : "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: true,
      rtl: localStorage.getItem("i18nextLng") === "ar",
    };
  };
}
