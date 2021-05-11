Validations are executed on the registration and login forms:

-User validations (blank fields, null characters, password matching) in blur and focus events through addEventsListener method. 

-DOM validations (inputs, existence of form and others)

When all validations passed, the application makes a Fetch to: https://jsonplaceholder.typicode.com/users?email=randomEmail@gmail.com  


