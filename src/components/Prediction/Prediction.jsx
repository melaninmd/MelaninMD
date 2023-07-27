import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function DiagnosisResult() {
    const dispatch = useDispatch();
    const conditionReducer = useSelector((store) => store.conditionReducer);


    return(
        <>
        <p>Result</p>
        <img src={conditionReducer.url}/>
        {conditionReducer.predictions?.map((condition, i) => {
            return(
                <div>
                   
                    <p>{condition.name}</p> 
                    <p>{condition.readMoreUrl}</p> 
                    
                </div>
               
               

            )
        })}

        </>
    )
}
export default DiagnosisResult