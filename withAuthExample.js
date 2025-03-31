import React from 'react';

// Higher-Order Component (HOC) to handle authentication logic
function withAuth(WrappedComponent) {
  return class extends React.Component {
    // Custom auth logic can go here
    render() {
      return <WrappedComponent {...this.props} /> 
    }
  }
}

// Usage example: Wrapping the Button component with auth logic
const AuthButton = withAuth(Button); 

export default AuthButton;
