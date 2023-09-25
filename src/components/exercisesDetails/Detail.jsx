/* eslint-disable react/prop-types */
import {  Stack, Typography, Button , useTheme } from "@mui/material"
import bodyPartImage from "/assets/icons/body-part.png"
import targetImage from "/assets/icons/target.png"
import equipmentImage from "/assets/icons/equipment.png"
const Detail = ({exerciseDetail}) => {
    const { name, target, bodyPart, gifUrl, equipment } = exerciseDetail
    const theme = useTheme()
    const extraDetail = [
        {
            icon: bodyPartImage,
            name: bodyPart,
        },
        {
            icon: targetImage,
            name: target,
        },
        {
            icon: equipmentImage,
            name: equipment,
        },
    ]


    return (
        <Stack gap={"60px"} sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center", textAlign: { xs: "center", lg: "start" } }}  >
            <img src={gifUrl} alt={name} className="detail-image" />

            <Stack sx={{ gap: { xs: "20px", lg: "35px" } }}  >
                <Typography variant="h3" fontWeight={"bold"} fontSize={{ xs: "33px", md: "52px" }}  color = {theme.palette.primaryColor.main} >{name}</Typography>
                <Typography variant="h6" >
                    Exercises keep you strong. {name} {" "}
                    is one of the best
                    exercises to target your {target}. It will help you improve your
                    mood and gain energy.



                </Typography>

                {
                    extraDetail.map(({ name, icon }, index) => (
                        <Stack key={index} direction={"row"} alignItems={"center"} gap={"30px"} >
                            <Button sx={{ backgroundColor: "#fff2db", borderRadius: "50%", width: "100px", height: "100px" }} >
                                <img src={icon} alt={bodyPart} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                            </Button>
                            <Typography textTransform="capitalize" variant="h5" fontWeight={"400"} fontSize={"33px"} >{name}</Typography>

                        </Stack>

                    ))

                }



            </Stack>


        </Stack>
    )
}

export default Detail