import React, { createContext, useState } from "react";

// Create the context
export const FormContext = createContext();

// Create the provider component
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        cardNumber: "",
        expirationCode: "",
        securityCode: "",
        country: "",
        postalCode: "",
        gst: "",
    });

    const [currentStep, setCurrentStep] = useState(1); // Track the form step

    // Update form data
    const updateFormData = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    // Go to next step
    const goToNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    // Go to previous step
    const goToPrevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    // Reset form and step
    const resetForm = () => {
        setFormData({
            firstName: "",
            lastName: "",
            cardNumber: "",
            expirationCode: "",
            securityCode: "",
            country: "",
            postalCode: "",
            gst: "",
        });
        setCurrentStep(1); // Reset to step 1
    };

    // Submit form
    const submitForm = () => {
        //console.log("Submitting form data: ", formData);
        // Call API or backend service here to submit the form data
    };

    return (
        <FormContext.Provider
            value={{
                formData,
                updateFormData,
                currentStep,
                goToNextStep,
                goToPrevStep,
                submitForm,
                resetForm, // Added resetForm function to the context
            }}
        >
            {children}
        </FormContext.Provider>
    );
};
