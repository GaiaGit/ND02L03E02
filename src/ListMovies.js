import React, {Component} from 'react';
import './App.css';
import ListUsers from './ListUsers'

class ListMovies extends Component {
	
    render() {
		return (
        	<ul>
          		{ this.props.movies.map( movie => {
           			var userLikes = [];
      
                    for(var i = 0; i < this.props.profiles.length; i++) {
                        if(+this.props.profiles[i].favoriteMovieID === +movie.id) {
                            userLikes.push(this.props.users[this.props.profiles[i].userID]);
                        }
                    }

                    return (
                        <li key={ movie.id }>
                            <h2>{ movie.name }</h2>

                            { userLikes && userLikes.length > 0 ? (
                                <div>
                                    Liked By:
                                    <ListUsers users={ userLikes } />
                                </div>
                            ) : (
                                <p>None of the current users liked this movie</p>
                            )
                        	}
                      </li>
                  )
              })
          }
      </ul>
      )
    }
}

export default ListMovies;