import React, { useState, useEffect } from 'react';
import { UserData } from './Data';
import LineChart from './LineChart';

const Chart2 = (props) => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.day),
        datasets: [
            {
                label: 'Hours of Sleep',
                data: UserData.map((data) => data.Hours),
                backgroundColor: [
                    '#FFE07D',
                    '#FFE07D',
                    '#FFE07D',
                    '#FFE07D',
                    '#FFE07D',
                ],
                borderColor: 'white',
                borderWidth: 2,
            },
        ],
    });

    return (
        <div className='chart'>
            <LineChart chartData={userData} />
        </div>
    );
};

export default Chart2;
