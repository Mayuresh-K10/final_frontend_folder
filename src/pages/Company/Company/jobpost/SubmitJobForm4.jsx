import { TextField, Checkbox, Box, Typography, Button, IconButton, Chip, Modal, Divider } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormContext } from "./FormContext";
import React, { useState, useContext } from "react";
import EditIcon from '@mui/icons-material/Edit';
import visa from "../../../../Assets/submit_job/visa.png";
import master from "../../../../Assets/submit_job/mastercard.png";

const SubmitJobForm4 = () => {
    const { formData, updateFormData, goToPrevStep, submitForm,currentStep, resetForm } = useContext(FormContext);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        submitForm();  // Call the submit form function from context
        setIsModalOpen(true);  // Show modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const perks = [
        "Shown at the top of search results",
        "Get notified when a candidate applies",
        "Top placement in job recommendations",
        "Send instant mobile alerts to qualified candidates in your location",
        "Review and invite 25 qualified and active job seekers to apply"
    ];

    return (
        <Box sx={{
            width: '800px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center ',
            borderRadius: '28px',
            padding: '24px',
            background: 'white',
            '@media(max-width:1100px)': {
                width: '100%'
            },
            '@media(max-width:800px)': {
                width: '100%'
            }
        }}>
            <Typography sx={{ fontSize: '24px', fontWeight: '500', marginBottom: '10px', textAlign: 'left' }}>
                Promote your job post to get 3x more qualify applicants
            </Typography>
            
            {/* Payment form */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography>First Name</Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography>Last Name</Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography>Credit or Debit card number</Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter card number"
                        value={formData.cardNumber}
                        onChange={(e) => updateFormData('cardNumber', e.target.value)}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                        <Typography>Expiration Code</Typography>
                        <TextField
                            placeholder="Enter expiration code"
                            value={formData.expirationCode}
                            onChange={(e) => updateFormData('expirationCode', e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                        <Typography>Security Code</Typography>
                        <TextField
                            placeholder="Enter security code"
                            value={formData.securityCode}
                            onChange={(e) => updateFormData('securityCode', e.target.value)}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                        <Typography>Country</Typography>
                        <select
                            style={{ padding: '16px', borderRadius: '8px', borderColor: 'gray' }}
                            value={formData.country}
                            onChange={(e) => updateFormData('country', e.target.value)}
                        >
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                        <Typography>Postal Code</Typography>
                        <TextField
                            placeholder="Enter postal code"
                            value={formData.postalCode}
                            onChange={(e) => updateFormData('postalCode', e.target.value)}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography>GST</Typography>
                    <TextField
                        placeholder="Enter GST"
                        value={formData.gst}
                        onChange={(e) => updateFormData('gst', e.target.value)}
                    />
                </Box>
            </Box>
            
            <Box sx={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <Button onClick={goToPrevStep}>Back</Button>
                <Button onClick={handleSubmit}>Post without promoting</Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Promote job</Button>
            </Box>

            {/* Success Modal */}
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <Box sx={{ ...modalStyles }}>
                    <Typography variant="h6">Job Submitted Successfully!</Typography>
                    <Typography>Your job post has been submitted and will be promoted.</Typography>
                    <Button variant="contained" color="primary" onClick={handleCloseModal}>
                        OK
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
};

export default SubmitJobForm4;
