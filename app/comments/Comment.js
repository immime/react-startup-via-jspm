/**
 * Created by John on 2016/6/8.
 */
'use strict';

import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="content">
                    <span className="author">{this.props.author}</span>
                    <div className="metadata">{this.props.date}</div>
                </div>
                <div className="text">{this.props.children}</div>
            </div>
        );
    }
}

export { Comment as default }