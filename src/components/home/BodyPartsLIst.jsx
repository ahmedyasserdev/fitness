import  { useEffect, useState } from 'react';
import { Box, Stack,  IconButton , useMediaQuery,  } from "@mui/material";
import BodyPart from "./BodyPart";
import RightArrowIcon from '/assets/icons/right-arrow.png';
import LeftArrowIcon from '/assets/icons/left-arrow.png';
import { useDispatch, useSelector } from "react-redux";
import { fetchBodyParts, getBodyParts } from "../../features/slices/exerciseSlice";

const BodyPartsList = () => {
    const bodyParts = useSelector(getBodyParts);
    const dispatch = useDispatch();
    const [scrollPosition, setScrollPosition] = useState(0);

      const isMediumScreen =  useMediaQuery(' (min-width : 750px) and (max-width:1024px)');
      const isSmallScreen =  useMediaQuery('(max-width:650px)');

    useEffect(() => {
        dispatch(fetchBodyParts());
    }, [dispatch]);

    const handleClick = (dir) => {
        setScrollPosition((prevSlide) => prevSlide + (dir === "left" ? -1 : 1));
    };




    const isSlideDisabled = (dir) => {
        if (dir === "left") {
            return scrollPosition === 0;
        } else if (dir === "right") {
            return scrollPosition === bodyParts.length - (isMediumScreen ? 6: isSmallScreen ? 4 : 8 )
        }
        return false;
    };

    const menuItems = bodyParts.map((item, index) => (
        <BodyPart key={index} item={item} />
    ));

    return (
        <Stack sx={{ position: "relative" }} p = {"10px"} >
            <IconButton
            size = "small"
                disabled={isSlideDisabled("left")}
                onClick={() => handleClick("left")}
                className="right-arrow"
            >
                <img src={LeftArrowIcon} alt="left-arrow" />
            </IconButton>
            <Box
                sx={{
                    display: 'flex',
                    transition: 'transform 0.3s ease-in-out',
                    transform: `translateX(${scrollPosition * -250}px)`,
                    gap: "13px"
                }}
            >
                {menuItems}
            </Box>
          
          
            <IconButton
            size = "small"
                disabled={isSlideDisabled("right")}
                onClick={() => handleClick("right")}
                className="left-arrow"
            >
                <img src={RightArrowIcon} alt="right-arrow" />
            </IconButton>
        </Stack>
    );
};

export default BodyPartsList;