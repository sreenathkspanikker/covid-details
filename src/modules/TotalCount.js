import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap';
import * as Components from "../components";
import { MyContext } from '../App'
import { useWindowWidth } from '@react-hook/window-size'
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar, Doughnut } from 'react-chartjs-2';
  
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
export const TotalCount = () => {
    const onlyWidth = useWindowWidth()
    const { chart } = useContext(MyContext)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
    };

    const labels = [
       'Total Cases',
       'Total Deaths',
       'Total Recovered',
       'Total Active',
       'Total Crittcal',
       'Todays Case',
       'Todays Recovered',
       'Todays Death' 
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [
                chart?.cases, 
                chart?.deaths, 
                chart?.recovered, 
                chart?.active,
                chart?.critical,
                chart?.todayCases,
                chart?.todayRecovered,
                chart?.todayDeaths,
            ],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(109, 102, 206, 0.2)',
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgba(109, 102, 206)',
            ],
            borderWidth: 1
        }]
    };

    return (
        <Row>
            <Col sm={12}>
                <Components.Cards title="Covid-19 Data" className='app-totals'>
                    <Row>
                        <Col sm={6}>
                            <Components.Cards title="Total" className="app-totals-list">
                                <ul>
                                    <li><span>Case</span>{chart?.cases}</li>
                                    <li><span>Death</span>{chart?.deaths}</li>
                                    <li><span>Recovered</span>{chart?.recovered}</li>
                                    <li><span>Active</span>{chart?.active}</li>
                                </ul>
                            </Components.Cards>
                        </Col>
                        <Col sm={6}>
                            <Components.Cards title="Todays" className="app-totals-list">
                                <ul>
                                    <li><span>Critical</span>{chart?.critical}</li>
                                    <li><span>Cases</span>{chart?.todayCases}</li>
                                    <li><span>Recovered</span>{chart?.todayRecovered}</li>
                                    <li><span>Deaths</span>{chart?.todayDeaths}</li>
                                </ul>
                            </Components.Cards>
                        </Col>
                    </Row>
                </Components.Cards>
            </Col>
            <Col sm={12}>
                <Components.Cards title="Covid-19 Analytics" className="app-chart-bar-wrap">
                    <div className='chart-wrap'>
                        {onlyWidth > 576 ? <Bar options={options} data={data} /> : <Doughnut  data={data} /> }                        
                    </div>
                </Components.Cards>
            </Col>
        </Row>

    )
}
