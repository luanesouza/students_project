import React from 'react';
import Student from './Student'


export default function StudentContainer(props){

      const student = props.students.map( student => <Student tags={props.tags} newTag={props.newTag} id={student.id} key={student.id} firstName={student.firstName}
        lastName={student.lastName}
        email={student.email}
        company={student.company}
        grades={student.grades}
        pic={student.pic}
        skill={student.skill}
        />);

      return(
        <h1>{student}</h1>
      )
}
