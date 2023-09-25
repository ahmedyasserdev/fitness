/* eslint-disable react/prop-types */
import  {  useState } from 'react';
import { Box, Stack,  IconButton , useMediaQuery,  } from "@mui/material";
import RightArrowIcon from '/assets/icons/right-arrow.png';
import LeftArrowIcon from '/assets/icons/left-arrow.png';
 const Scroller = ({data , children}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const isMediumScreen =  useMediaQuery(' (min-width : 750px) and (max-width:1024px)');
    const isSmallScreen =  useMediaQuery('(max-width:650px)');
      
    const isSlideDisabled = (dir) => {
        if (dir === "left") {
            return scrollPosition === 0;
        } else if (dir === "right") {
            return scrollPosition === data.length - (isMediumScreen ? 6: isSmallScreen ? 4 : 7 )
        }
        return false;
    };

    return (
        <Stack sx={{ position: "relative" }} p = {"10px"} >
            <IconButton
                size = "small"
                disabled={isSlideDisabled("left")}
                onClick={() => setScrollPosition(prev => prev - 1)}
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
                {children}
            </Box>
            <IconButton
                size = "small"
                disabled={isSlideDisabled("right")}
                onClick={() => setScrollPosition(prev => prev + 1)}
                className="left-arrow"
            >
                <img src={RightArrowIcon} alt="right-arrow"  />
            </IconButton>
        </Stack>
    );
};

export default Scroller