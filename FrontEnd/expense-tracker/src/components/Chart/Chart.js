import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Chart.css';

const DoughnutChart = (props) => {
    console.log(props.chartData);
    const data = {
        labels: ['Budget', 'Remaining', 'Spent'],
        datasets: [
            {
            data: props.chartData,
            backgroundColor: [
                'rgba(2, 117, 216, 0.2)',
                'rgba(92, 184, 92, 0.2)',
                'rgba(217, 83, 79, 0.2)'
            ],
            borderColor: [
                'rgba(2, 117, 216, 1)',
                'rgba(92, 184, 92, 1)',
                'rgba(217, 83, 79, 1)'
            ],
            borderWidth: 1,
            },
        ],
    };

    return (
        <div className="doughnut-chart">
            <Doughnut data={data} />
        </div>
    );
};

export default DoughnutChart;