import React, {useState} from 'react';
import Tag from './Tag'

export default function Student(props){

  const [isDisplayed, displayGrades] = useState(false)
  const [tag, setTag] = useState('')
  const [tags, getAllTags] = useState([])

  const buttonBackground = {
    minus: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-minus-512.png',
    plus:'https://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png'
  }

  const { pic, firstName, lastName, email, skill, grades, company, id } = props

  function averageGrade(grades){
    const average = grades.reduce((accumulator, element) => accumulator + element) / grades.length;
    const result = average.toString().replace(/(\d)(?=(\d{5})+(?!\d))/g, '$1.')
    return result;

  }

  function formatGrades(grades){
    if (isDisplayed){
      return grades.map( (grade, idx) => {

        return <p key={idx}>Test {idx+1}: {grade}%</p>
      })
    }
  }

  const addTag = tag => {
      const newTags = [...tags, tag ];

      getAllTags(newTags);
      formatTags(newTags)
      // props.newTag(newTags, id)

    };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTag(tag)
    setTag('')
  }

  function formatTags(tags){
    return tags.map((tag, idx) => <p id='tag' key={idx}>{tag}</p>)
  }


  return(
    <section className='studentInfoSection'>
      <img src={pic} alt='button-img'/>
      <section className='studentNameAndInfo'>
        <h2> {firstName} {lastName} </h2>
        <section className='studentInfo'>
          <p> Email: {email} </p>
          <p> Company: {company} </p>
          <p> Skill: {skill} </p>
          <p> Average: {averageGrade(grades)}% </p>
            {formatGrades(grades)}
          {isDisplayed
            ?
            <Tag newTag={props.newTag} tags={props.tags}/>
            : ''}
        </section>
      </section>

      <button className='expand-btn' onClick={() => displayGrades(!isDisplayed)}>
        <img id='buttonImg' src={isDisplayed ? buttonBackground.plus : buttonBackground.minus} alt='expand-btn'/>
      </button>
    </section>
  )
}
