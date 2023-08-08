import React from "react";

export default function ForgotPassword() {
  return (
    <>
      <div class="row1 from-group">
        <h1>Forgot Password</h1>
        <h6 class="information-text">
          Enter your registered email to reset your password.
        </h6>
        <form
          method="post"
          action="/user/reset-password"
          class="form-group"
          novalidate
        >
          <input type="hidden" name="csrf_token" value="{{.CSRFToken}}" />
          <div class="form-group">
            <label for="email">Email:</label>
            {/* {{with .Form.Errors.Get "email"}}
                    <label class="text-danger">{{.}}</label>
                {{end}} */}
            {/* <input class="form-control {{with .Form.Errors.Get "email"}} is-invalid {{end}}" id="email"
                    autocomplete="off" type='email'
                    name='email' value="" required> */}
          </div>
          <hr />
          <input type="submit" class="btn btn-primary" value="Reset Password" />
        </form>
      </div>
    </>
  );
}
