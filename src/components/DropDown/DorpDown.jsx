import React from 'react'
import { Select, MenuItem } from '@mui/material'

const DorpDown = ({ options, color, bgColor }) => {
    return (
        <Select
            id="courseInterest"
            type="text"
            name="couser-of-inttrest"
            required
            variant="outlined"
            sx={{
                border: "2px solid #EFEFEF",
                borderRadius: "12px",
                background: bgColor || "#fff",
                padding: "6px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "150%",
                color: color || "#210366",
                "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                    padding: "0px 0.625rem !important",
                },
            }}
        >
            <MenuItem>
                <em>none</em>
            </MenuItem>
            {
                options.map((option, index) => (
                    <MenuItem value={option} key="index">{option}</MenuItem>

                ))
            }

        </Select>
    )
}

export default DorpDown;
