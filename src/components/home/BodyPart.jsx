/* eslint-disable react/prop-types */
import { Stack,  Typography, useTheme } from "@mui/material";
import icon from "/assets/icons/gym.png";
import { useDispatch, useSelector } from "react-redux";
import { getChosenPart, setChosenPart } from "../../features/slices/exerciseSlice";

const BodyPart = ({ item }) => {
    const chosenPart = useSelector(getChosenPart);
    const theme = useTheme();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setChosenPart(item));
    };

    const isSelected = chosenPart === item;

    return (
        <Stack
            sx={{
                border: isSelected ? `2px solid ${theme.palette.primaryColor.main}` : null,
                backgroundColor: "#fff",
                height: "auto",
                width: "auto",
                p: "50px",
                cursor: "pointer",
                borderLeftRadius: "20px",
                flexDirection: "column",
                my : {xs: "17px" , md :0 },
                gap : "8px",
                mx : "10px"
            }}
            type="button"
            alignItems="center"
            justifyContent="space-between"
            className="bodyPart-card"
            key={item.id}
            onClick={handleClick}
        >
            <img src={icon} alt="dumbbell" style={{ width: '40px', height: '40px' ,}} />
            <Typography  variant = "h6" fontWeight= {"bold"}  fontSize="21px" color="#3A1212" textTransform="capitalize">
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;