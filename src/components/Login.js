import React, { Component } from "react";
import ApiCaller from '../utils/callApi'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    let { username, password } = this.state;
    return (
      <div className="container">
        <h2>Đăng nhập</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Tài khoản:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="nhập tài khoản"
              name="username"
              value={username}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="nhập mật khẩu"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />{" "}
              lưu mật khẩu
            </label>
          </div>
          <button type="submit" className="btn btn-primary cursor-pointer">
            Đăng Nhập
          </button>
        </form>
      </div>
    );
  }
}
