import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (

    <form onSubmit={submit} className="login-form">
      <h1 className="login-welcome-message">Your life organized!</h1>

      <label htmlFor="username"></label>

      <input className="input-field"
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="password"></label>

      <input className="input-field"
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <button className="log-in" type="submit">LOGIN</button>
    </form>

  );
};