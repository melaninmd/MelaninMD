import React from "react";
import { Card, Typography, CardContent, Button, colors } from "@mui/material";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import "./QuizPage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function QuizPage() {
  const history = useHistory();
  const [click, setClick] = useState(true);
  const [prediction, setPrediction] = useState(true);
  const [predictionTwo, setPredictionTwo] = useState(true);
  const [press, setPress] = useState(true);

  const clickPush = () => {
    console.log("History button clicked");
    setClick(true);
    setPrediction(true);
    setPredictionTwo(true);
  };

  const handleClick = () => {
    setClick(!click);
    // setClick();
  };

  return (
    <div className="container">
      <form></form>
      <Typography variant="h3" sx={{ textAlign: "center", height: "100%" }}>
        Quiz
      </Typography>
      <br />
      <Typography variant="h4" sx={{textAlign: "center"}}>
        What's your skin type?
      </Typography>
      <br />
      <Card elevation={7} sx={{backgroundColor: "#195382", color: "white"}}>
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
                  <Radio
                    type="radio"
                    onClick={() => setPrediction(!prediction)}
                  />
                  <Typography>No</Typography>
                  <Radio type="radio" onClick={() => handleClick()} />
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
              {predictionTwo ? (
                <>
                  <Typography>
                    Is your skin rough, flaky, or even scaly? Is your skin
                    affected by cold temperatures? (If yes, then dry skin)
                  </Typography>
                  <Typography>Yes</Typography>
                  <Radio
                    type="radio"
                    onClick={() => setPredictionTwo(!predictionTwo)}
                  />

                  <Typography>No</Typography>
                  <Radio type="radio" aria-label="No" />
                </>
              ) : (
                <Typography>
                  Recommendation is to include gentle, soothing, and hydrating
                  ingredients that help maintain the skins protective moisture
                  barrier—such as ceramides for example, SkinCeuticals Triple
                  Lipid Restore, or CeraVe Moisturizing Cream. It is recommended
                  to avoid excessively long, hot showers, moisturizing multiple
                  times per day, and opting for skincare products that are
                  fragrance-free, non-comedogenic, and alcohol-free.
                </Typography>
              )}
            </>
          )}
        </CardContent>
      </Card>
      <br />
      <br/>
        <Button
          sx={{ backgroundColor: "ButtonShadow" }}
          onClick={() => clickPush()}
        >
          Back
        </Button>
        <br />
        <br />
              <Typography variant="h4" sx={{textAlign: "center"}}>Why is it important to know skin type?</Typography>
              <br />
      <Card elevation={7} sx={{backgroundColor: "#195382", color: "white"}}>
        <CardContent>
          
          <Typography>
            Knowing your skin type is essential for effective skincare and
            overall skin health. Each skin type has unique characteristics and
            needs, and using products and routines tailored to your specific
            type can help address concerns and maintain a healthy complexion.
            For example, oily skin may require oil-controlling products to
            prevent breakouts, while dry skin needs hydrating products to retain
            moisture. Using the wrong products for your skin type can lead to
            issues like irritation, acne, or excessive dryness. Understanding
            your skin type empowers you to make informed choices in your
            skincare routine, ensuring that you provide the right care and
            support for your skin's specific requirements.
          </Typography>
        </CardContent>
      </Card>
      <br />
      <br />
     
    </div>
  );
}

export default QuizPage;
