import React from "react";

const FormErrorMessages = ({ errors }) => {
  return (
    <>
      {errors.map((error, index) => (
        <small key={index} id="emailHelp" className="form-text text-danger">
          {error}
        </small>
      ))}
    </>
  );
};

<<<<<<< HEAD:src/components/ErrorMessages.jsx
export default ErrorMessages;
=======
export default FormErrorMessages;
>>>>>>> yakov:src/components/form-error-messages/form-error-messages.jsx
