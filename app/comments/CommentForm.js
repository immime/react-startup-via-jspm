/**
 * Created by John on 2016/6/8.
 */
'use strict';

import React from 'react';

class CommentForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        let author = this.refs.author.value;
        let text = this.refs.text.value;

        console.log(author, text);

        this.props.onCommentSubmit({author, text});
    }

    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>
                <div className="field">
                    <textarea placeholder="评论" ref="text"></textarea>
                </div>
                <button type="submit" className="ui blue button">
                    添加评论
                </button>
            </form>
        );
    }
}

export { CommentForm as default };