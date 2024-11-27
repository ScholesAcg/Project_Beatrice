import React, { useState } from 'react';
import { Select, MenuItem, Box } from '@mui/material';

const SelectWithImages = ({ options }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Select
            value={selectedValue}
            onChange={handleChange}
            displayEmpty
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {options.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                    <Box display="flex" alignItems="center">
                        <img
                            src={option.image}
                            alt={option.label}
                            style={{ marginRight: 8, width: 20, height: 20 }}
                        />
                        {option.label}
                    </Box>
                </MenuItem>
            ))}
        </Select>
    );
};

export default SelectWithImages;
