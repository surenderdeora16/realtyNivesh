"use client";
import { useEffect, useState } from "react";

export default function LeaveConfirmation() {
  const [showPopup, setShowPopup] = useState(false);
  const [rememberChoice, setRememberChoice] = useState(false);

  // Check if the user has previously chosen to "Remember" their choice
  useEffect(() => {
    const remember = localStorage.getItem("leaveConfirmationRemember");
    if (remember === "true") {
      setRememberChoice(true);
    }
  }, []);

  // Handle the 'beforeunload' event
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!rememberChoice) {
        event.preventDefault();  // Prevent the unload without triggering the browser's confirmation popup
        setShowPopup(true);      // Show the custom popup
      }
    };

    // Add listener only if not remembered
    if (!rememberChoice) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [rememberChoice]);

  // Update remember choice in local storage
  const handleRememberChange = () => {
    setRememberChoice((prev) => !prev);
    localStorage.setItem("leaveConfirmationRemember", !rememberChoice);
  };

  // Hide popup and clear the listener
  const handleStay = () => {
    setShowPopup(false);
  };

  // Redirect on "Leave" click
  const handleLeave = () => {
    setShowPopup(false);
    window.location.href = "/";
  };

  return (
    <>
    </>
  )
}
