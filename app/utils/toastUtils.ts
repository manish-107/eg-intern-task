interface ToastProps {
  toastMessage: string;
  color: string;
  showToast: boolean;
}

export const showToast = (
  setShowToastMessage: (toast: ToastProps) => void,
  message: string,
  color: string
) => {
  setShowToastMessage({
    toastMessage: message,
    color,
    showToast: true,
  });

  setTimeout(() => {
    setShowToastMessage({
      toastMessage: "",
      color: "",
      showToast: false,
    });
  }, 3000);
};
