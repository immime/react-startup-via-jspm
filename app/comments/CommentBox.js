/**
 * Created by John on 2016/6/8.
 */
'use strict';

import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:[]};

        // 模拟服务端数据
        this.getComments();
        //setInterval(() => this.getComments(), 5000);
    };

    getComments() {
        // 请求数据
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: comments => {
                this.setState({data: comments});
            },
            error: (xhr, status, error) => {
                console.error(error);
            }
        });
    }

    handleCommentSubmit(comment) {

        console.log(comment);

        let comments = this.state.data;
        let newComments = comments.concat(comment);

        this.setState({data: newComments});
    }

    render() {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        );
    }
}

export { CommentBox as default };