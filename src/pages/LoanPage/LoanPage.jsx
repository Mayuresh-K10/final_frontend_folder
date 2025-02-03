import React from 'react'
import { Routes, Route } from "react-router-dom";
import EducationLoan from '../EducationLoan/EducationLoan'


const LoanPage = () => {
    return (
        <>
            <Routes>
                <Route exact path="/*" element={<EducationLoan />} />
               
            </Routes>
        </>
    )
}

export default LoanPage