import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class NewItemForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="name" component={this.renderInput} label="NAME" />
        <Field name="store" component={this.renderInput} label="STORE" />
        <Field name="category" component={this.renderInput} label="CATEGORY" />
        <button className="ui primary">CREATE</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.name) {
    errors.name = 'you must enter a name'
  }
  if (!formValues.store) {
    errors.store = 'please choose a store'
  }
  if (!formValues.category) {
    errors.category = 'please choose a category'
  }
  return errors
}

export default reduxForm({
  form: 'newItem',
  validate,
})(NewItemForm)
