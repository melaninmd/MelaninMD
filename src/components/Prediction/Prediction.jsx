import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function DiagnosisResult() {
  const conditionReducer = useSelector((store) => store.conditionReducer);

  const generateChartData = () => {
    const labels = conditionReducer.predictions?.map((condition) => condition.name) || [];
    const data = conditionReducer.predictions?.map((condition) => condition.confidence) || [];

    return {
      labels: labels,
      datasets: [
        {
          label: 'Confidence',
          data: data,
          backgroundColor: ["green", "blue", "red", "yellow", "orange", "purple", "pink"], // Customize the bar color here
        },
      ],
    };
  };

  return (
    <>
      <div>
        <p>Result</p>
        <img src={conditionReducer.url} alt="Condition Image" />
        {conditionReducer.predictions?.map((condition, i) => (
          <div key={i}>
            <p>{condition.name}</p>
            <p>{condition.readMoreUrl}</p>
          </div>
        ))}
      </div>
      <div style={{ height: '300px', width: '400px' }}>
        <Bar data={generateChartData()} />
      </div>
    </>
  );
}

export default DiagnosisResult;
