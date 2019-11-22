import React from 'react';
import './404.scss';

function NotFound() {
    return (
        <div className="NotFound">
            <div className="error">404</div>
            <br /><br />
            <span className="info">File not found</span>
            <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class="static" alt="tv-static" />
        </div>
    )
}

export default NotFound;