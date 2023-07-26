import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function DiagnosisResult() {
    const dispatch = useDispatch();
    const conditionReducer = useSelector((store) => store.conditionReducer);

    useEffect(() => {
        //load the diagnosis result on page load
        dispatch({ type: "GET_CONDITION"})
    }, []);

    return(
        <>
        <p>Result</p>
        {conditionReducer.map((condition, i) => {
            return(
                // <img></img>

               <p>{condition.prediction.name}</p> ,
               <p>{condition.prediction.readMoreUrl}</p> 
               

            )
        })}

        </>
    )
}
export default DiagnosisResult