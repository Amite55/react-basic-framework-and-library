import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarksData = [
        {id:1, name:"amite", math:87, physics: 76, chemistry:57 },
        {id:2, name:"madhab", math:77, physics: 56, chemistry:46 },
        {id:3, name:"rudrik", math:86, physics:75 , chemistry: 45},
        {id:4, name:"arthi", math:59, physics: 86, chemistry: 50},
        {id:5, name:"adrika", math:58, physics: 46, chemistry: 95},
        {id:6, name:"ayous", math:90, physics: 57, chemistry: 89},
        {id:7, name:"oyon", math:64, physics: 96, chemistry:66 },
        {id:8, name:"nuhan", math:67, physics: 86, chemistry: 55},
        {id:9, name:"nishad", math:79, physics: 57, chemistry:75 },
        {id:10, name:"tushar", math:70, physics:57 , chemistry: 85}
    ]
    return (
        <div className='text-center'>
            <LChart className='mx-auto' width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='yellow'> </Line>
                <Line dataKey="physics" stroke='blue'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;