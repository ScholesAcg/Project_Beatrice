// import React, { useEffect } from 'react';
// import { Select, MenuItem, Box } from '@mui/material';

// const SelectWithShapes = ({ options = [], value, onChange }) => {
//     useEffect(() => {
//         if (!value && options.length > 0) {
//             onChange({ target: { value: options[0].value } });
//         }
//     }, [value, options, onChange]);

//     const selectedOption = options.find(option => option.value === value);

//     return (
//         <Box sx={{width: "100%"}}>
//             <Select
//                 value={value}
//                 onChange={onChange}
//                 displayEmpty
//                 renderValue={(selected) => {
//                     if (!selected) {
//                         return (
//                             <Box
//                                 sx={{
//                                     display: 'inline-block',
//                                     width: 20,
//                                     height: 20,
//                                     backgroundColor: 'gray', // Default color when no selection is made
//                                     clipPath: 'circle(50%)' // Default shape when no selection is made
//                                 }}
//                             />
//                         );
//                     }

//                     const selectedShape = options.find(option => option.value === selected);
//                     return (
//                         <Box display="flex" alignItems="center">
//                             <Box
//                                 component="span"
//                                 sx={{
//                                     display: 'inline-block',
//                                     width: 20,
//                                     height: 20,
//                                     backgroundColor: selectedShape.color,
//                                     clipPath: selectedShape.shape === 'circle' ? 'circle(50%)' : 'polygon(50% 0%, 0% 100%, 100% 100%)',
//                                 }}
//                             />
//                         </Box>
//                     );
//                 }}
//             >
//                 {options && options.length > 0 && options.map((option, index) => (
//                     <MenuItem key={index} value={option.value}>
//                         <Box display="flex" alignItems="center">
//                             <Box
//                                 component="span"
//                                 sx={{
//                                     display: 'inline-block',
//                                     width: 20,
//                                     height: 20,
//                                     marginRight: 1,
//                                     backgroundColor: option.color,
//                                     clipPath: option.shape === 'circle' ? 'circle(50%)' : 'polygon(50% 0%, 0% 100%, 100% 100%)',
//                                 }}
//                             />
//                             {option.label}
//                         </Box>
//                     </MenuItem>
//                 ))}
//             </Select>
//         </Box>
//     );
// };

// export default SelectWithShapes;




import React, { useEffect } from 'react';
import { Select, MenuItem, Box } from '@mui/material';

const SelectWithShapes = ({ options = [], value, onChange }) => {
    useEffect(() => {
        if (!value && options.length > 0) {
            onChange({ target: { value: options[0].value } });
        }
    }, [value, options, onChange]);

    return (
        <Select
            value={value}
            onChange={onChange}
        >
            {options && options.length > 0 && options.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                    <Box display="flex" alignItems="center">
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                width: 20,
                                height: 20,
                                marginRight: 1,
                                backgroundColor: option.color,
                                clipPath: option.shape === 'circle' ? 'circle(50%)' : 'polygon(50% 0%, 0% 100%, 100% 100%)',
                            }}
                        />
                        {option.label}
                    </Box>
                </MenuItem>
            ))}
        </Select>
    );
};

export default SelectWithShapes;
