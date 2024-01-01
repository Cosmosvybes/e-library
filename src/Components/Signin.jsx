import React, { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // console.log({ email: username, password: password });
    fetch(`/api/user/account/signin`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ email: username, password: password }),
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Unable to sign in");
        }
        return result.json();
      })
      .then((res) => {
        if (res.data.isAuthorized) {
          window.location.href = "/books";
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    // console.log({ email: username, password: password });
    fetch(`/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        password: pass,
        email: email,
      }),
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Unable to sign up");
        }
        return result.json();
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="flex justify-between items-center h-96 px-44 max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <div className="flex flex-col justify-center">
          <p> Sign in </p>
          <form action="" className="flex flex-col" onSubmit={signIn}>
            <input
              type="email"
              placeholder="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="border border-gray-400"> Sign in </button>
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <p> Sign Up </p>
          <form action="" className="flex flex-col" onSubmit={signUp}>
            <input
              type="text"
              placeholder="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button className="border border-gray-400"> create account </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
