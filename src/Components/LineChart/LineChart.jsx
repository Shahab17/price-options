import { LineChart as LChart, Line, XAxis, YAxis,Tooltip } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "Student A", mathMarks: 85, physicsMarks: 75, chemistryMarks: 92 },
        { id: 2, name: "Student B", mathMarks: 78, physicsMarks: 80, chemistryMarks: 85 },
        { id: 3, name: "Student C", mathMarks: 92, physicsMarks: 88, chemistryMarks: 90 },
        { id: 4, name: "Student D", mathMarks: 88, physicsMarks: 92, chemistryMarks: 78 },
        { id: 5, name: "Student E", mathMarks: 75, physicsMarks: 78, chemistryMarks: 85 },
        { id: 6, name: "Student F", mathMarks: 90, physicsMarks: 85, chemistryMarks: 88 },
        { id: 7, name: "Student G", mathMarks: 82, physicsMarks: 75, chemistryMarks: 80 },
        { id: 8, name: "Student H", mathMarks: 95, physicsMarks: 92, chemistryMarks: 89 },
        { id: 9, name: "Student I", mathMarks: 89, physicsMarks: 80, chemistryMarks: 92 },
        { id: 10, name: "Student J", mathMarks: 93, physicsMarks: 88, chemistryMarks: 78 }
      ];
      


    return (
        <div className='mb-10 px-5 '>
            <LChart width={300} height={400} data={studentData}>
            <XAxis dataKey="name" />
            <YAxis />
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" ></Line>
                <Line dataKey="chemistryMarks" stroke='green' ></Line>
                <Tooltip></Tooltip>
            </LChart>
        </div>
    );
};

export default LineChart;