import { Accounts } from 'meteor/accounts-base'

// Configure accounts to use usernames instead of email addresses
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
})
