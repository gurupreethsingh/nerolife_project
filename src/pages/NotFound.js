import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center contanier mt-5 mb-5">
      <h1 className="display-1">Oops</h1>
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button className="btn btn-sm btn-outline-dark">
          <AiOutlineHome className="text-dark m-2" />
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
