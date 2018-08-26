import React, {Component} from 'react';

class ListUsers extends Component {
  
	render() {
  
      return (
        <ul>
        {
         	Object.keys(this.props.users).map(user => {
                  return (
                    <li key={ this.props.users[user].id }>
                        { this.props.users[user].name }
                    </li>
                  )
    		})
		}
		</ul>
      )
    }
}

export default ListUsers;