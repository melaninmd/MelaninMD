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
                <div>
                    <img>{condition.prediction.url}</img>
                    <p>{condition.prediction.name}</p> 
                    <p>{condition.prediction.readMoreUrl}</p> 
                </div>
               
               

            )
        })}

        </>
    )
}
export default DiagnosisResult