import React from 'react'
import classes from './User.scss'

export default class User extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeAccount = this.handleChangeAccount.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePrio = this.handleChangePrio.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChangeAccount(event) {
    this.props.all.updateAccount(event.target.value)
  }
  handleChangePass(event) {
    this.props.all.updatePassword(event.target.value)
  }
  handleChangeName(event) {
    this.props.all.updateUsername(event.target.value)
  }
  handleChangePrio(event) {
    this.props.all.updatePriority(event.target.value)
  }
  handleSubmit() {
    if (this.props.all.user.add.account !== '' && this.props.all.user.add.password !== '' && this.props.all.user.add.username !== '' && this.props.all.user.add.priority !== '') {
      let user = {
        account: this.props.all.user.add.account,
        password: this.props.all.user.add.password,
        username: this.props.all.user.add.username,
        priority: this.props.all.user.add.priority
      }
      this.props.all.fetchAddUser(user)
    }
  }
  render() {
    let users;
    if (this.props.all.user && this.props.all.user.users.length !== 0) {
      users = this.props.all.user.users.map((item) => {
        return (
          <tr>
            <td>{item.account}</td>
            <td>{item.username}</td>
            <td>{item.priority}</td>
          </tr>
        )
      })
    }
    return (
    <div>
      <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" style={{marginBottom: '20px'}}>添加一个用户</button>
      <button type="button" className="btn btn-info" style={{marginBottom: '20px', marginLeft: '20px'}}>备用</button>
      <div className="table-responsive">
        <table className='table table-hover table-bordered'>
          <thead>
            <tr>
                <td>帐号</td>
                <td>用户名</td>
                <td>权限</td>
            </tr>
            {users}
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">添加一个用户</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">帐号</label>
                  <input type="text" className="form-control" id="account" placeholder="" value={this.props.all.user.add.account} onChange={this.handleChangeAccount} />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">密码</label>
                  <input type="password" className="form-control" id="password" placeholder="" value={this.props.all.user.add.password} onChange={this.handleChangePass} />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">用户名</label>
                  <input type="text" className="form-control" id="username" placeholder="" value={this.props.all.user.add.username} onChange={this.handleChangeName} />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">权限</label>
                  <input type="text" className="form-control" id="priority" placeholder="" value={this.props.all.user.add.priority} onChange={this.handleChangePrio} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>添加</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
}

export default User