/**
 * Created by John on 2016/6/8.
 */
'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import CommontBox from './comments/CommentBox';

var comments = [
    {"author":"梅西", "date":"5分钟前", "text":"你去欧洲杯吗？吸罗"},
    {"author":"C.罗纳尔多", "date":"3分钟", "text":"去啊，一起呗！"}
];

ReactDOM.render(
    <CommontBox url="app/comments-fack-data.json" />,
    document.getElementById("app")
);
