import React from 'react';
import * as moment from 'moment';

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <div className={'section'}>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {
                            notifications && notifications.map(n => {
                                return (
                                    <li key={n.id}>
                                        <span className="pink-text">{n.user}</span>&nbsp;&nbsp; <span>{n.content}</span>
                                        <div className="grey-text note-date">{moment(n.time.toDate()).fromNow()}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Notifications;
