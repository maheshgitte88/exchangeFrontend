import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Webcam from "react-webcam";
import * as Yup from "yup";

const validationSchema = Yup.object({
  phoneNumber: Yup.number().required("Phone number is required"),
  panNumber: Yup.string().required("Pan number is required"),
  aadhaarNumber: Yup.number().required("12 digit Aadhaar number is required"),
  aadhaarName: Yup.string().required("Name As per Aadhaar Card is required"),
});

const UserKycForm = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [panFilePreview, setPanFilePreview] = useState(null);
  const [aadharFilePreview, setAadharFilePreview] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef(null);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  const handleCapture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    if (capturedImage) {
    }
    setSubmitting(false);
  };
  const handleFileUpload = (event, setFilePreview) => {
    const file = event.target.files[0];
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="flex flex-col  justify-center min-h-screen bg-gray-100">
        <div
          className={`flex  justify-center p-2 rounded-lg shadow-lg bg-blue-500 text-white `}
        >
          <h1 className="text-3xl font-bold">User KYC Form</h1>
        </div>
        <div className={`flex justify-center ${theme}-theme`}>
          <Formik
            initialValues={{
              phoneNumber: "",
              panNumber: "",
              aadhaarNumber: "",
              aadhaarName: "",
              selfieFile: "",
              panFile: null,
              aadharFile: null,
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="flex p-6 space-x-6 space-y-4 rounded-lg shadow-lg">
              <div className="w-1/2 space-y-4">
                <div className="p-2">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Field type="tel" name="phoneNumber" />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="p-2">
                  <label htmlFor="panNumber">Pan Number</label>
                  <Field type="text" name="panNumber" />
                  <ErrorMessage
                    name="panNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="p-2">
                  <label htmlFor="aadhaarNumber">Aadhaar Number</label>
                  <Field type="tel" name="aadhaarNumber" />
                  <ErrorMessage
                    name="aadhaarNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="p-2">
                  <label htmlFor="aadhaarName">Aadhaar Name</label>
                  <Field type="text" name="aadhaarName" />
                  <ErrorMessage
                    name="aadhaarName"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="panFile">Pan Document</label>
                  <Field
                    type="file"
                    name="panFile"
                    onChange={(event) =>
                      handleFileUpload(event, setPanFilePreview)
                    }
                  />
                </div>
                <div>
                  {panFilePreview && (
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={panFilePreview}
                      alt="Pan Document Preview"
                    />
                  )}
                </div>
                <div>
                  <label htmlFor="aadharFile">Aadhar Document</label>
                  <Field
                    type="file"
                    name="aadharFile"
                    onChange={(event) =>
                      handleFileUpload(event, setAadharFilePreview)
                    }
                  />
                </div>
                <div>
                  {aadharFilePreview && (
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={aadharFilePreview}
                      alt="Aadhar Document Preview"
                    />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {showWebcam && (
                    <Webcam
                      audio={false}
                      height={720}
                      width={1280}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setShowWebcam(true);
                    }}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Live Selfie
                  </button>
                  {showWebcam && (
                    <button
                      type="button"
                      onClick={() => {
                        handleCapture();
                        setShowWebcam(false);
                      }}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Capture Selfie
                    </button>
                  )}
                </div>
                {capturedImage && (
                  <div style={{ width: "100px", height: "100px" }}>
                    <label htmlFor="selfieFile">Selfie</label>
                    <img src={capturedImage} alt="Captured Selfie" />
                  </div>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default UserKycForm;
