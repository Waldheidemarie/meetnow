import React, { Component } from 'react';


class CommentForm extends Component {

  state = { comment: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name] : e.target.value })
  }

  render () {
    return (
      <div className="c-form">
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="comment" value={this.state.comment} placeholder="say something..."/>
            <button type="submit" style={{ 'display' : 'none'}}></button>
        </form>
      </div>
    )
  }
}


class ChildComment extends Component {
  render () {
    return (
      <div className="child-comment">
        <h6>Child</h6>
      </div>
    )
  }
}


class ParentComment extends Component {

  state = { isFormActive: false, isCommentEmpty: false }

  toggleComment = () => {
      const { isFormActive } = this.state;
      this.setState({
          isFormActive: isFormActive === true ? false : true
      })
  }

  render () {
    return (
      <div className="parent-comment">
        <div className="comments-list-item">
            <img src={require('../utils/images/default-user.png')} />
            <span><strong>Abu Jega</strong></span><br />
            <p>My comment is here. Read it!</p>
            <button>Reply</button>
        </div>
        {this.state.isCommentEmpty && <CommentForm /> }
      </div>
    )
  }
}


class CommentsList extends Component {
  render () {
    return (
      <div className="comments-list">
        <h4>Comments</h4>
        <ul>
          <li><ParentComment /></li>
          <li><ParentComment /></li>
        </ul>
      </div>
    )
  }
}

export default CommentsList;