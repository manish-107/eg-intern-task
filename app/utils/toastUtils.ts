interface ToastProps {
  toastMessage: string;
  color: string;
  showToast: boolean;
}

/* Displays a toast notification with a specified message and color. 
The toast will automatically disappear after 3 seconds. */

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
