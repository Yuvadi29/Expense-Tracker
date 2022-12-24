import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
// import { useClasses } from '@mui/material/styles';
import { css } from '@emotion/react';


const styles = {
    income: {
        borderBottom: '10px solid rgba(0,255,0,0.5)',
    },
    expense: {
        borderBottom: '10px solid rgba(255,0,0,0.5)',
    },

};

const Details = () => {
    const classes = useClasses(styles);
    return (
        <Card>
            <CardHeader title="Income" className={classes.income} />
            <CardContent >
                <Typography variant="h5">$50</Typography>
                {/* This is a type of chart similar to the Pie Chart */}
                <Doughnut data="Data" />
            </CardContent>
        </Card>
    )
}

export default Details;