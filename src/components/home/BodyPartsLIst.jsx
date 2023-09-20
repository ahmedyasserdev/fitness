/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect } from "react";
import {
    fetchBodyParts,
    getBodyParts,
    getChosenPart,
    setChosenPart,
} from "../../features/slices/exerciseSlice";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Box, Typography, useTheme } from "@mui/material";
import icon from "/assets/icons/gym.png";

const BodyPartsList = () => {
    const theme = useTheme();
    const bodyParts = useSelector(getBodyParts);
    const dispatch = useDispatch();
    const chosenPart = useSelector(getChosenPart);
    useEffect(() => {
        dispatch(fetchBodyParts());
    }, []);

    console.log(bodyParts);

    return (
        <Stack alignItems="center"
            justifyContent="center"
            direction={"row"} mt={"40px"}  
            gap ={{xs: "15px" , md : "20px" }}
      
            >
            {bodyParts.map((item) => {
                return (
                    <Box
                        sx={{
                            border:
                                chosenPart === item
                                    ? `2px solid ${theme.palette.primaryColor.main}`
                                    : null,

                            backgroundColor: "#fff",
                            height : "auto",
                            width  :"auto",
                            p : "50px" ,
                            cursor : "pointer",
                            borderLeftRadius : "20px",
                            textAlign : "center",
                            display : "flex" ,
                            gap : "40px" ,
                            flexDirection : "column" ,
                            alignItems :"center"

                            }}
                        className="bodyPart-card"
                        type="button"

                        key={item.id}
                        onClick={() => dispatch(setChosenPart(item))}
                    >
                            <img
                                src={icon}
                                alt="dumbbell"
                                style={{ width: "50px", height: "50px" }}
                            />

                            <Typography fontSize = {"24px"} fontWeight = {"bold"} textTransform = "capitalize" color= "#3a1212"  >{item}</Typography>
                    </Box>
                );
            })}
        </Stack>
    );
};

export default BodyPartsList;
