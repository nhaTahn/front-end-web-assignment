import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page of the app</Link>
      </p>
    </div>
  );
}

export { NoMatch };
