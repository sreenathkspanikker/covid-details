import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import * as Components from "../components";
import { GET } from '../server'
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
  
export const TotalCounts = () => {
    const [chartData, setChartdata] = useState([])
    const onlyWidth = useWindowWidth()

    useEffect(() => {
      let isLoad = true
      if (isLoad) {
        const fetchData = async () => {
            const res = await GET('/all')
            if (res) setChartdata(res)
        }
        fetchData()
      }
      return () => {
        isLoad = false
      }
    }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
    };

    const labels = [
        `${onlyWidth > 576 ? 'Cases' : 'Cases'}`,
        `${onlyWidth > 576 ? 'Deaths' : 'Deaths'}`,
        `${onlyWidth > 576 ? 'Recovered' : 'Recovered'}`,
        `${onlyWidth > 576 ? 'Active' : 'Active'}`,
        `${onlyWidth > 576 ? 'Crittcal' : 'Crittcal'}`,
        `${onlyWidth > 576 ? 'Todays Case' : 'T-C'}`,
        `${onlyWidth > 576 ? 'Todays Recovered' : 'T-R'}`,
        `${onlyWidth > 576 ? 'Todays Death' : 'T-D'}`  
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [
                chartData.cases, 
                chartData.deaths, 
                chartData.recovered, 
                chartData.active,
                chartData.critical,
                chartData.todayCases,
                chartData.todayRecovered,
                chartData.todayDeaths,
            ],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(201, 203, 207)',
            'rgb(201, 203, 207)',
            'rgb(201, 203, 207)',
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
                                    <li><span>Case</span>{chartData.cases}</li>
                                    <li><span>Death</span>{chartData.deaths}</li>
                                    <li><span>Recovered</span>{chartData.recovered}</li>
                                    <li><span>Active</span>{chartData.active}</li>
                                </ul>
                            </Components.Cards>
                        </Col>
                        <Col sm={6}>
                            <Components.Cards title="Todays" className="app-totals-list">
                                <ul>
                                    <li><span>Critical</span>{chartData.critical}</li>
                                    <li><span>Cases</span>{chartData.todayCases}</li>
                                    <li><span>Recovered</span>{chartData.todayRecovered}</li>
                                    <li><span>Deaths</span>{chartData.todayDeaths}</li>
                                </ul>
                            </Components.Cards>
                        </Col>
                    </Row>
                </Components.Cards>
            </Col>
            <Col sm={12}>
                <Components.Cards title="Covid-19 Analytics" className="app-chart-bar-wrap">
                    <div className='chart-wrap'>
                        {onlyWidth > 576 ? <Bar options={options} data={data} /> : <Doughnut options={options} data={data} /> }                        
                    </div>
                </Components.Cards>
            </Col>
        </Row>

    )
}
