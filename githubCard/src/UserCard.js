import React from 'react';

function UserCard(props) {
      return (
        <div className="card">
          <h2>{props.user.login}</h2>
          <p className="location">{props.user.location}</p>
          
          <div>
            <h4>Friends: </h4>
            {props.followers.map(follower => (
              <div className="name" key={follower.id}>{follower.login}</div>
            ))}
          </div>
        </div>
      );
    }
    
    export default UserCard