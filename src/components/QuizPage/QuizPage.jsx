import React from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import { useState } from "react";
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function QuizPage() {
  const [click, setClick] = useState(true);
  const [prediction, setPrediction] = useState(true);
  const [predictionTwo, setPredictionTwo] = useState(true);

  const handleClick = () => {
    setClick(!click);
    setClick();
  };

  return (
    <div className="container">
      <form></form>

      <p>Quiz Page</p>

      <CardContent>
        {click ? (
          <>
            {prediction ? (
              <>
                <Typography>
                  Do you feel greasy or shiny on your T-zone (forehead, nose,
                  and chin)? Are you prone to acne? (If yes, then oily skin)
                </Typography>
                <Typography>Yes</Typography>
                <input
                  type="radio"
                  onClick={() => setPrediction(!prediction)}
                />
                <Typography>No</Typography>
                <input type="radio" onClick={() => handleClick()} />
              </>
            ) : (
              <Typography>
                Use a gentle, foaming cleanser that effectively removes dirt,
                excess oil, and other impurities like Cetaphil Gentle Foaming
                Cleanser or Clarins Soothing Gentle Foaming Cleanser.
              </Typography>
            )}
          </>
        ) : (
          <>
            {
              predictionTwo ? 
            (
              <>
            <Typography>
              Is your skin rough, flaky, or even scaly? Is your skin affected by
              cold temperatures? (If yes, then dry skin)
            </Typography>
            <Typography>Yes</Typography>
            <input type="radio" onClick={() => setPredictionTwo(!predictionTwo)}/>
            <Typography>No</Typography>
            <input type="radio" />
            </>
              )
            : 
              (
                <Typography>
                  Recommendation is to include gentle, soothing, and hydrating
                  ingredients that help maintain the skins protective moisture
                  barrier—such as ceramides for example, SkinCeuticals Triple Lipid
                  Restore, or CeraVe Moisturizing Cream. It is recommended to avoid
                  excessively long, hot showers, moisturizing multiple times per
                  day, and opting for skincare products that are fragrance-free,
                  non-comedogenic, and alcohol-free.
                </Typography>
              )
            }
          </>
        )}
      </CardContent>
    </div>
  );
}

export default QuizPage;
