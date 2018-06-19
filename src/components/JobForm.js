import React from "react"

class JobForm extends React.Component{
  state = {
    form: {
      title: "",
      pay: "",
      description: "",
      interested: ""
    }
  }

  handleForm = (event) => {
    let newForm = { ...this.state.form }
    newForm[event.target.name] = event.target.value
    this.setState({form: newForm})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.submitJobListing(this.state.form)
  }

  render(){
    return(
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form" onChange={this.handleForm} onSubmit={this.handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
          <label htmlFor="pay">Compensation</label>
          <input type="text" name="pay" />
          <label htmlFor="description">Description</label>
          <textarea name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    )
  }
}

export default JobForm
