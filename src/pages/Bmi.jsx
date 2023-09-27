import { useState } from 'react';
import { fetchBMI, getBmi } from '../features/slices/bmiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, useTheme, Typography, Button, Stack } from "@mui/material"

const Bmi = () => {
    const [showResult, setShowResult] = useState(false);
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const dispatch = useDispatch();
    const bmi = useSelector(getBmi);
    const theme = useTheme();
    const { BMI, Class } = bmi;


    const handleClick = () => {
        if (height && weight) {
            dispatch(fetchBMI({ height, weight }));
            setShowResult(true); 

            setHeight("");
            setWeight("");
        }
    };

    const renderTextField = (placeholder, value, onChange) => {
        return (
            <TextField
            sx={{
                '.MuiInputBase-input': {
                    fontWeight: 700,
                    borderRadius: "4px",
                    padding: "10px",
                    color: theme.palette.primaryColor.main,
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: "none",
                    },
                    '&.Mui-focused fieldset': {
                        border: "none",
                    },
                },
                backgroundColor: "#fff",
                width: { xs: "350px", md: "400px" },
                height: "60px",
            }}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}

            />
        );
    };

    return (
        <Box sx={{ height: "100vh", pt: "150px", px: { xs: "0px !important", md: "80px !important" }, overflow: "hidden" }} >
            <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems={{ xs: "center", md: "flex-start" }}
                gap={"15px"}
                justifyContent={{ xs: "center", md: "start" }}
            >
                <Stack direction="column" gap={"10px"}  >
                    {renderTextField("Height", height, setHeight)}
                    {renderTextField("Weight", weight, setWeight)}
                    <Button
                        className="search-btn"
                        onClick={handleClick}
                        sx={{
                            backgroundColor: theme.palette.primaryColor.main,
                            color: "#fff",
                            textTransform: "none",
                            width: { xs: "80px", lg: "130px" },
                            fontSize: { xs: "14px", md: "20px" },
                            height: { xs: "38px", lg: "44px" },
                            textAlign: "start",
                        }}
                    >
                        Calc
                    </Button>
                </Stack>

                {showResult && bmi ? (
                    <Box sx={{ backgroundColor: "#fff", mx: { xs: "12px", sm: "0" }, minWidth: "300px", borderRadius: "8px", p: "50px" }}  >
                        <Typography variant="h6" color="#000" textTransform="capitalize"  >
                            your bmi is {'  '}
                            <Typography variant="span" color={theme.palette.primaryColor.main} fontSize={"20px"} fontWeight={600}>
                                {BMI}
                            </Typography>
                           {' '} and you are {" "}
                            <Typography variant="span" color={theme.palette.primaryColor.main} fontSize={"20px"} fontWeight={600}>
                                {Class}
                            </Typography>
                        </Typography>
                    </Box>
                ) : null}
            </Stack>
        </Box>
    );
};

export default Bmi;