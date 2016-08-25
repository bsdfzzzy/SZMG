import React from 'react'
import classes from './HomeView.scss'
import { Component } from 'react'

export default class HomeView extends Component {
    constructor(props) {
        super(props)
        this.handleChangeAccount = this.handleChangeAccount.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleChangeAccount(event) {
        this.props.all.updateAccount(event.target.value)
    }
    handleChangePass(event) {
        this.props.all.updatePassword(event.target.value)
    }
    handleLogin(event) {
        event.preventDefault();
        let account = this.props.all.home.account
        let password = this.props.all.home.password
        let data = {account: account, password: password}
        this.props.all.fetchLogIn(data)
    }
    handleLogout(event) {
        event.preventDefault()
        this.props.all.fetchLogout()
    }
    render(){
        let render_;
        if (this.props.all.home.isLogin) {
            render_ =   <div className="jumbotron">
                                    <h2>Hello, {this.props.all.home.admin}!</h2>
                                    <button className="btn btn-default" onClick={this.handleLogout}>点击退出登录</button>
                                </div>;
        } else {
            let errLabel;
            if (this.props.all.home.err !== '') {
                errLabel = <label className="control-label" htmlFor="exampleInputPassword1" style={{color: 'red'}}><br />帐号或密码错误</label>;
            } else {
                errLabel = '';
            }
            render_ =   <div className="jumbotron">
                                    <h2>欢迎进入巡检信息管理系统，请登录</h2>
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">帐号</label>
                                            <input type="text" className="form-control" id="account" value={this.props.all.home.account} placeholder="Email" onChange={this.handleChangeAccount} />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">密码</label>
                                            <input type="password" className="form-control" id="password" value={this.props.all.home.password} placeholder="Password" onChange={this.handleChangePass} />
                                            {errLabel}
                                        </div>
                                        <button type="submit" className="btn btn-default" onClick={this.handleLogin}>提交</button>
                                    </form>
                                </div>;
        }
        return (
            <div>
                {render_}
            </div>
        )
    }
}
