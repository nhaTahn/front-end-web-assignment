import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h1>Chưa làm</h1>
      <p>
        <Link to="/home">Go to the home page of the app</Link>
      </p>
    </div>
  );
}

export { NoMatch };
