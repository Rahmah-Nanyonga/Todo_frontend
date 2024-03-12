import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="card">
        About Our Todo App Welcome to our Todo App – a simple and efficient way
        to manage your tasks and stay organized. Our app is designed with user
        simplicity in mind, offering a straightforward interface to help you
        keep track of your todos effortlessly. Key Features: Easy Task
        Management: Add, edit, and delete tasks with just a few clicks. Our
        intuitive design ensures that managing your todos is a breeze. Real-time
        Updates:
        <br />
        <Link to="/" className="link"> Go To Home </Link>
      </div>
    </>
  );
}

export default About;
