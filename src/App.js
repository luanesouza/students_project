import React from 'react';
import './App.css';
import StudentContainer from './components/StudentContainer'
import { getStudents } from './utils'

class App extends React.Component {
  state = {
    students: [],
    filteredStudents: [],
    tags: []
  }


  async renderStudents(){
    const data = await getStudents()

    this.setState({
      students: data.students,
      filteredStudents: data.students
    })
  }

  newTag = (tags) => {

    this.setState({tags: [...this.state.tags, tags]})
  }

  componentDidMount(){
    this.renderStudents()
  }

  handleChange(e) {
    const { name, value } = e.target;
    let filteredStudents = this.state.students;
    let tags = this.state.tags
    this.setState({
      [name]: value,
    })


    if(name === 'filteredStudents'){
      filteredStudents = filteredStudents.filter((student) => {
        return student.firstName.toLowerCase().search(value.toLowerCase()) !== -1;
      });
      this.setState({
        filteredStudents
      })
    } else if(name === 'tag-input') {
      tags = tags.filter( tag => {
        return tag.search(value) !== -1;
      })

      this.setState({
        tags
      })

    }
};

  render() {
    const { filteredStudents, tags } = this.state;

    return (
      <main className="App">
        <input name='filteredStudents' onChange={(e) => this.handleChange(e)} id='name-input' placeholder='Search by name'/>
        <input name='tag-input' onChange={(e) => this.handleChange(e)}  placeholder='Search by tags'/>
        <StudentContainer tags={tags} newTag={this.newTag} students={filteredStudents}/>
      </main>
    );
  }
}

export default App;
