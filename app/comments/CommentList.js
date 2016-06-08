/**
 * Created by John on 2016/6/8.
 */
'use strict';

import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        let commentNodes = this.props.data.map((cmt, index) => {
            return (
                <Comment key={index} author={cmt.author} date={cmt.date}>
                    {cmt.text}
                </Comment>
            );
        });

        return (
            <div>
                {commentNodes}
            </div>
        );
    }
}

export { CommentList as default }