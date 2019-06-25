import React, { Component } from 'react';

// Set up the initial Context
const AccountContext = React.createContext();

// Create a exportable consumer that can be used in components
export const AccountConsumer = AccountContext.Consumer; 

// Provider, define items you items you want app wide or anything props
class AccountProvider extends Component {
  state = {
    username: 'Fooman',
    dateJoined: '12/12/12',
    membershipLevel: 'Silver',
    updateAccount: (account) => this.updateAccount(account),
  }

  updateAccount = (account) => {
    //username
    //dateJoined
    this.setState({...account})
  }

  render(){
    return(
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;