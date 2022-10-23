import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "2003",
    Roger_Feder: 0,
    Ratel_Nadal: 0,
    Novek_Diokovec: 0,
    amt: 24
  },
  {
    name: "2004",
    Roger_Feder: 10,
    Ratel_Nadal: 0,
    Novek_Diokovec: 0,
    amt: 22
  },
  {
    name: "2005",
    Roger_Feder: 15,
    Ratel_Nadal: 0,
    Novek_Diokovec: 0,
    amt: 22
  },
  {
    name: "2006",
    Roger_Feder: 25,
    Ratel_Nadal: 10,
    Novek_Diokovec: 0,
    amt: 20
  },
  {
    name: "2007",
    Roger_Feder: 30,
    Ratel_Nadal: 15,
    Novek_Diokovec: 0,
    amt: 21
  },
  {
    name: "2008",
    Roger_Feder: 35,
    Ratel_Nadal: 20,
    Novek_Diokovec: 0,
    amt: 25
  },
  {
    name: "2009",
    Roger_Feder: 35,
    Ratel_Nadal: 25,
    Novek_Diokovec: 5,
    amt: 20
  },
  {
    name: "2010",
    Roger_Feder: 45,
    Ratel_Nadal: 35,
    Novek_Diokovec: 5,
    amt: 23
  },
  {
    name: "2011",
    Roger_Feder: 55,
    Ratel_Nadal: 43,
    Novek_Diokovec: 5,
    amt: 20
  },
  {
    name: "2012",
    Roger_Feder: 55,
    Ratel_Nadal: 43,
    Novek_Diokovec: 15,
    amt: 24
  },
  {
    name: "2013",
    Roger_Feder: 60,
    Ratel_Nadal: 43,
    Novek_Diokovec: 15,
    amt: 20
  },
  {
    name: "2014",
    Roger_Feder: 70,
    Ratel_Nadal: 50,
    Novek_Diokovec: 25,
    amt: 23
  },
  {
    name: "2015",
    Roger_Feder: 80,
    Ratel_Nadal: 50,
    Novek_Diokovec: 25,
    amt: 24
  },
  {
    name: "2016",
    Roger_Feder: 85,
    Ratel_Nadal: 60,
    Novek_Diokovec: 35,
    amt: 21
  },
  {
    name: "2017",
    Roger_Feder: 85,
    Ratel_Nadal: 60,
    Novek_Diokovec: 45,
    amt: 20
  },
  {
    name: "2018",
    Roger_Feder: 85,
    Ratel_Nadal: 65,
    Novek_Diokovec: 45,
    amt: 20
  },
  {
    name: "2019",
    Roger_Feder: 90,
    Ratel_Nadal: 70,
    Novek_Diokovec: 45,
    amt: 23
  },
  {
    name: "2020",
    Roger_Feder: 90,
    Ratel_Nadal: 75,
    Novek_Diokovec: 55,
    amt: 20
  },
  {
    name: "2021",
    Roger_Feder: 90,
    Ratel_Nadal: 90,
    Novek_Diokovec: 80,
    amt: 24
  },
  {
    name: "2022",
    Roger_Feder: 90,
    // Ratel_Nadal: 90, uncomment to use this
    Novek_Diokovec: 100,
    amt: 21
  }
];

const CustomizedLabel = (props) => {
  const { x, y, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill="none" fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={10} y={0} dy={16} textAnchor="end" fill="#666">
        {payload.value}
      </text>
    </g>
  );
};

export default function DataChart() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 20,
          bottom: 10
        }}
      >
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          wrapperStyle={{ paddingBlock: "10px" }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Ratel_Nadal" stroke="#1976d2">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="Roger_Feder" stroke="#64b5f6">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="Novek_Diokovec" stroke="#ef6c00">
          <LabelList content={<CustomizedLabel />} />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
}
