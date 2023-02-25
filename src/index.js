import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  return <>
    <p>
      {props.part1} {props.exercices1}
    </p>
    <p>
      {props.part2} {props.exercices2}
    </p>
    <p>
      {props.part3} {props.exercices3}
    </p>
  </>
}

const Total = (props) => {
  console.log(props)
  return <p>Number of exercices {props.exer1 + props.exer2 + props.exer3}</p>;
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content
        part1={course.parts[0].name} exercices1={course.parts[0].exercises}
        part2={course.parts[1].name} exercices2={course.parts[1].exercises}
        part3={course.parts[2].name} exercices3={course.parts[2].exercises} />
      <Total exer1={course.parts[0].exercises} exer2={course.parts[1].exercises} exer3={course.parts[2].exercises} />
    </>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))