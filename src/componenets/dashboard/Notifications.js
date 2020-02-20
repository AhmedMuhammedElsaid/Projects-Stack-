import React from 'react'
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;
    console.log(notifications);

    return (
        <div className="section ">
            <div className="card   z-depth-0 ">
                <div className="card-content">
                    <span className="card-title black-text ">Notifications</span>
            {/* <a href="#" className="btn-floating  pink-text  right"><i className="pink material-icons">favorite</i></a> */}
                    <ul className="notifications">
                        {notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="pink-text"> {item.user} </span>
                                    <span> {item.content} </span>
                                    <p className="grey-text note-date">
                                        {moment((item.time.toDate())).fromNow()}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Notifications