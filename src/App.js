
import './App.css';
import Comment from './components/Comment';


const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React !",
  author: {
    name: 'Luna',
    avatarUrl: 'https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-don-de-thuong-ngo-nghinh-nhat-1w1jpg.jpg?fit=400%2C20000&quality=95&ssl=1'
  },
};
function App() {
  return (
    <Comment date={comment.date}
        text={comment.text}
        author={comment.author}
    />
    
  );
}

export default App;
