import React, { useEffect } from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';

const DonutGraph = () => {
  useEffect(() => {
    // Log the data to verify it's correct
    console.log('Data:', data);
  }, []);

  // Data for the donut graph
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [{
      data: [30, 40, 50],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  };

  // Options for the donut graph
  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Register the arc element
  Chart.register(Chart.controllers.doughnut);

  return (
    <div>
      <h2>Donut Graph</h2>
      <div style={{ width: '400px', height: '400px' }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutGraph;
