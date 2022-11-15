import React from "react";

const ActivityItem = ({ activity }) => {
  return (
    <span className="activity_item">
      <p>
        <b>name: {activity.name}</b>
      </p>
      <p>{activity.description}</p>
      <p>duration: {activity.duration}</p>
      <p>count: {activity.count}</p>
    </span>
  );
};

export default ActivityItem;
