import { Box, Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setExercises, fetchExercises, getExercises ,} from "../../features/slices/exerciseSlice";

const SearchExercises = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.exercise.searchValue);
    const theme = useTheme();
    const exercises = useSelector(getExercises);
    
    
    const handleSearchChange = (event) => {
        dispatch(setSearchValue(event.target.value.toLowerCase()));
    };


  
    const handleClick = () => {
        if (searchValue) {
            dispatch(fetchExercises());
            const searchedExercises = exercises.filter((exercise) => (
                exercise.name.toLowerCase().includes(searchValue) ||
                exercise.target.toLowerCase().includes(searchValue) ||
                exercise.bodyPart.toLowerCase().includes(searchValue) ||
                exercise.equipment.toLowerCase().includes(searchValue)

            ));
            dispatch(setSearchValue(""));

            dispatch(setExercises(searchedExercises));
            console.log(searchedExercises);
        }
    };

    return (
        <Stack alignItems="center" mt="30px" p="20px" justifyContent="center">
            <Typography fontWeight={700} fontSize={{ lg: "40px", xs: "25px" }} mb="50px" textAlign="center">
                Awesome Exercises You <br /> Should Know
            </Typography>

            <Box display="flex" alignItems="center" gap={{ xs: "8px", md: "0px" }}>
                <TextField
                    sx={{
                        '.MuiInputBase-input': {
                            fontWeight: 700,
                            borderRadius: "4px",
                            padding: "10px",
                            color: theme.palette.primaryColor.main,
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                border: "transparent",
                            },
                        },
                        backgroundColor: "#fff",
                        width: { lg: "800px", xs: "calc(350px - 80 )" },
                        border: "none",
                    }}
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Search Exercise"
                />

                <Button
                    className="search-btn"
                    onClick={handleClick}
                    sx={{
                        backgroundColor: theme.palette.primaryColor.main,
                        color: "#fff",
                        textTransform: "none",
                        width: { xs: "`80px", lg: "130px" },
                        fontSize: { xs: "14px", md: "20px" },
                        height: { xs: "38px", lg: "44px" }
                    }}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    );
};

export default SearchExercises;