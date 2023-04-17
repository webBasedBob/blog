import React, { useEffect, useRef } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ErrorModal.module.scss";
import { errorActions } from "@/store/error";
const ErrorModal = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.error.errorMessage);

  const resetErrorState = () => {
    dispatch(errorActions.resetState());
  };

  const showErrorModal = (message) => {
    confirmDialog({
      message: message,
      header: "Error",
      icon: "pi pi-exclamation-triangle",
      accept: resetErrorState,
      reject: "",
      acceptLabel: "OK",
      rejectClassName: styles.cancelBtn,
    });
  };

  useEffect(() => {
    if (errorMessage !== "") {
      showErrorModal(errorMessage);
    }
  }, [errorMessage]);

  return <ConfirmDialog />;
};

export default ErrorModal;
