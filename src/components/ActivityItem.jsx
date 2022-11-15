import React from "react";

const ActivityItem = ({ activity }) => {
  return (
    <div className="activity_item">
        <b>{activity.name}</b>
        <p>{activity.description}</p>
        <span> duration: {activity.duration},  count: {activity.count}</span>
    </div>
  );
};

export default ActivityItem;
