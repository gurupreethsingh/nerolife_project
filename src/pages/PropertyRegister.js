import React from "react";
import { Link } from "react-router-dom";

const PropertyRegister = () => {
  return (
    <div>
      <div className="justify-content-center align-items-center w-50 m-auto">
        <h1 className="text-start display-1 mb-3">REGISTER</h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label h3 display-6">
              NAME
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label h3 display-6">
              CONTACT
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label h3 display-6">
              EMAIL
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label h3 display-6">
              PASSWORD
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div class="d-grid gap-2">
            <button class="btn btn-outline-dark mb-2" type="submit">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyRegister;
