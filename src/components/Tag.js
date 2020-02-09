import React, {useState} from 'react';

export default function Tag(props){

  const [tag, setTag] = useState('')
  const [tags, getAllTags] = useState([])


  const addTag = tag => {
      const newTags = [...tags, tag ];

      getAllTags(newTags);
      formatTags(newTags)

    };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.newTag(tag)
    addTag(tag)
    setTag('')
  }

  function formatTags(tags){
    return tags.map((tag, idx) => <p id='tag' key={idx}>{tag}</p>)
  }


  return(
    <section className='studentInfoSection'>
      <>
        {formatTags(tags)}
      </>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Add a tag'
          type="text"
          value={tag}
          onChange={e => setTag(e.target.value)}/>
      </form>
    </section>
  )
}
