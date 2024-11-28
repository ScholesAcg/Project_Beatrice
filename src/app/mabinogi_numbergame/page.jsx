'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography, Paper, Grid2, Alert, AlertTitle, LinearProgress, Snackbar } from '@mui/material';
import GridCell from "../../../components/number_button";
import EnterGridCell from "../../../components/number_button/Enter_button"
import ClearGridCell from "../../../components/number_button/Clear_button"
import ClearALLGridCell from "../../../components/number_button/ClearALL_button"
import NumberInput from "../../../components/mui_input";
import NumberStack from "../../../components/number_stack";
import ShapesSelect from "../../../components/shapes_select";
import algo_num from "../../../application/algo_num";
import { option_one } from "./options";
import { option_two } from "./options";
import './style.css';
import { title, inputstyle } from "./style";

const MabinogiNumberGame = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [output, setOutput] = useState("");

    const [clickedIndex, setClickedIndex] = useState(null); // 用於跟蹤點擊的格子
    const [enterisClicked, setEnterIsClicked] = useState(false);
    const [clearisClicked, setClearIsClicked] = useState(false);
    const [cALLisClicked, setcALLIsClicked] = useState(false);

    const [value, setValue] = useState("");

    const [selectedCircleValue, setSelectedCircleValue] = useState("");
    const [selectedTriangelValue, setSelectedTriangelValue] = useState("");

    const [undoStack, setUndoStack] = useState([]);
    const [stackValue, setStackValue] = useState([]);

    const handleFailure = () => {
        handleAfterFailure();
        setShowAlert(true);

        // Automatically dismiss after 3 seconds (3000ms)
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleCircleSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedCircleValue(newValue);
        /*if (onChange) {
            onChange(newValue); // Call the onChange prop to notify parent component
        }*/
    };

    const handleTriangelSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedTriangelValue(newValue);
        /*if (onChange) {
            onChange(newValue); // Call the onChange prop to notify parent component
        }*/
        //console.log(selectedCircleValue)
        //console.log(selectedTriangelValue)
        //console.log(stackValue)
    };


    const handleClick = (index) => {
        setClickedIndex(index); // 記錄當前點擊的格子
        setTimeout(() => setClickedIndex(null), 100); // 恢復動畫狀態
        setValue(value.concat(index + 1));
    };

    const handleCClick = () => {
        setValue("");
        setClearIsClicked(true);
        setTimeout(() => setClearIsClicked(false), 100);
    }

    const handleCALLClick = () => {
        setOutput("");
        setClickedIndex(null);
        setValue("");
        setSelectedCircleValue("");
        setSelectedTriangelValue("");
        setStackValue([]);
        setcALLIsClicked(true);
        setTimeout(() => setcALLIsClicked(false), 100);
    }

    const handleEnter = () => {
        setEnterIsClicked(true);
        setTimeout(() => setEnterIsClicked(false), 100);



        if (parseInt(selectedCircleValue) + parseInt(selectedTriangelValue) > 3) {
            handleFailure();
            return;
        }
        if (selectedCircleValue == 2 && selectedTriangelValue >= 1) {
            handleFailure();
            return
        }
        if (value.length > 3 || value.length < 3) {
            handleFailure();
            return
        }

        setUndoStack((prevUndoStack) => [...prevUndoStack, stackValue]);

        setStackValue((prevStackValue) => [...prevStackValue, {
            input: value.split('').map(Number),
            correct: parseInt(selectedCircleValue),
            misplaced: parseInt(selectedTriangelValue),
        },])



        setValue("");
        setSelectedCircleValue("");
        setSelectedTriangelValue("");

    }

    const handleUndo = () => {
        if (undoStack.length > 0) {
            const lastState = undoStack[undoStack.length - 1];
            setUndoStack((prevUndoStack) => prevUndoStack.slice(0, -1));
            setStackValue(lastState);
        }
    };


    const handleAfterFailure = () => {
        setValue("");
        setSelectedCircleValue("");
        setSelectedTriangelValue("");
    }

    useEffect(() => {
        handleCalculation();
    }, [stackValue])



    const handleCalculation = () => {
        const output = algo_num(stackValue)
        console.log(output)
        if (output.usedCachedResult == true) {
            handleUndo();
            handleFailure();
        }
        setOutput(output);
    }

    const handleKeyDown = (event) => {
        const activeElement = document.activeElement;

        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'SELECT') {
            return;
        }
        const key = parseInt(event.key);
        if (key >= 1 && key <= 9) {
            handleClick(key - 1);
        }
        if (event.key === "Enter") {
            handleEnter();
        }
    };



    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [value]);

    // const customOrder = [6, 7, 8, 3, 4, 5, 0, 1, 2];
    const customOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="container">
            

            <h1 style={title}>瑪奇猜數字小工具</h1>
            <div className="container_row">

                <div className="container_column">

                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                    }}
                    >
                        <NumberInput style={inputstyle} label="輸入數字" value={value} onChange={handleChange} />
                        <ClearGridCell onClick={handleCClick} isClicked={clearisClicked} />
                    </Box>

                    <div className="grid">
                        {
                            /*Array.from({ length: 9 }, (_, i) => (
                                <GridCell
                                    key={i}
                                    index={i}
                                    isClicked={clickedIndex === i}
                                    onClick={() => handleClick(i)}
                                />
                            ))*/
                            customOrder.map((mappedIndex) => (
                                <GridCell
                                    key={mappedIndex}
                                    index={mappedIndex}
                                    isClicked={clickedIndex === mappedIndex}
                                    onClick={() => handleClick(mappedIndex)}
                                />
                            ))
                        }
                        <ShapesSelect options={option_one} value={selectedCircleValue} onChange={handleCircleSelectChange} displayEmpty />
                        <ShapesSelect options={option_two} value={selectedTriangelValue} onChange={handleTriangelSelectChange} displayEmpty />
                        <EnterGridCell onClick={handleEnter} isClicked={enterisClicked} />
                    </div>
                    <ClearALLGridCell onClick={handleCALLClick} isClicked={cALLisClicked} />

                </div>
                <NumberStack stack={stackValue} />
            </div>

            {/* Floating Alert */}
            <Snackbar
                open={showAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={2000} // Automatically close after 2 seconds
                onClose={() => setShowAlert(false)}
            >
                <Box sx={{ width: '100%', position: 'relative' }}>
                    <Alert
                        severity="error"
                        sx={{ boxShadow: 3 }}
                    >
                        錯誤輸入
                    </Alert>

                    {/* Timeout Line */}
                    <LinearProgress
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                        }}
                    />
                </Box>
            </Snackbar>

            <Paper elevation={3} sx={{ padding: 2, margin: 2, maxWidth: 605 }}>
                <Typography variant="h6" gutterBottom>
                    符合條件的組合數量: {output.count}
                </Typography>
                <Box
                    sx={{
                        backgroundColor: '#f9f9f9',
                        padding: 2,
                        borderRadius: 1,
                        border: '1px solid #ddd',
                        minHeight: '150px',
                        overflow: 'auto',
                        maxWidth: '600px',
                    }}
                >
                    {Array.isArray(output.combinations) && output.combinations.length > 0 ? (
                        <Grid2 container spacing={1.3}>
                            {output.combinations.map((item, index) => (
                                <Grid2 sx={{}} xs={1.2} key={index}>
                                    <Box
                                        sx={{
                                            padding: 1,
                                            backgroundColor: '#fff',
                                            border: '1px solid #ddd',
                                            borderRadius: 1,
                                            textAlign: 'center',
                                            fontFamily: 'monospace',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {JSON.stringify(item)}
                                    </Box>
                                </Grid2>
                            ))}
                        </Grid2>
                    ) : (
                        <Typography variant="body1">No data available</Typography>
                    )}
                </Box>
                
            </Paper>
            <div>
                @貝婷 戀乂之舞030
            </div>
            <Link
                href="/"
                className="nav-link"
                style={{
                    display: 'inline-block',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#0070f3')}
            >
                緋色重工
            </Link>
        </div>
    );
}

export default MabinogiNumberGame;

