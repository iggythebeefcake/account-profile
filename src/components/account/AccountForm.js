import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';

class AccountForm extends Component {
  state = { 
    username: this.props.username, 
    membershipLevel: this.props.membershipLevel 
  }

  handleSubmit = (e) => {  
    e.preventDefault();
    // add function
    const account = { ...this.state }
    this.props.updateAccount(account)
  }

  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value })
  // }

  handleChange = (e, { name, value}) => this.setState({ [name]: value })

  render() {
    const { username, membershipLevel } = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label="New Username"
          required
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select 
          label="Membership Level"
          required
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={levelOptions}
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }  
}

const levelOptions = [
  { key: 'b', text: 'Bronze', value: 'Bronze'},
  { key: 's', text: 'Silver', value: 'Silver'},
  { key: 'g', text: 'Gold', value: 'Gold'},
  { key: 'p', text: 'Platinum', value: 'Platinum'}
]

const ConnectedAccountForm = (props) => {
  return(
    <AccountConsumer>
      { value => (
        <AccountForm
          { ...props }
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

export default ConnectedAccountForm;