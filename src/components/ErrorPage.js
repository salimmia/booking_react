import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container">
      <div className="row">
        <div>
          <h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
              <em>{error.statusText || error.message}</em>
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}
