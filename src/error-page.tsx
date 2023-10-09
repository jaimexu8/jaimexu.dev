import { useRouteError } from "react-router-dom";

interface MyErrorType {
  statusText?: string;
  message?: string;
}

function isErrorType(obj: unknown): obj is MyErrorType {
  return (
    typeof obj === "object" &&
    obj !== null &&
    ("statusText" in obj || "message" in obj)
  );
}

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  let errorMessage: string;

  if (isErrorType(error)) {
    errorMessage = error.statusText || error.message || "Unknown error";
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
