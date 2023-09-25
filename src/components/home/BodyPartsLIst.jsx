/* eslint-disable react/prop-types */
import { useEffect, } from 'react';
import BodyPart from "./BodyPart";
import { useDispatch, useSelector } from "react-redux";
import { fetchBodyParts, getBodyParts  } from "../../features/slices/exerciseSlice";
import Scroller from '../Scroller';


const BodyPartsList = () => {
    const bodyParts = useSelector(getBodyParts);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchBodyParts());
    }, [dispatch]);


   

    return (
        <Scroller
            data={bodyParts}
        >
            {bodyParts.map((item, index) => (
                <BodyPart key={index} item={item} />
            ))
            }
        </Scroller>
    );
};

export default BodyPartsList;
