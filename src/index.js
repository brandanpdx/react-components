import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
 return (
   <div className="ui container comments">
     <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" commentText="Cool bro" avatar={faker.image.avatar()} />
     <CommentDetail author="Jane" timeAgo="Today at 2:45 PM" commentText="Amazing" avatar={faker.image.avatar()} />
     <CommentDetail author="Alex" timeAgo="Yesterday at 2:15 PM" commentText="Nice" avatar={faker.image.avatar()} />
   </div>

 )
};



ReactDOM.render(<App />, document.querySelector('#root'));