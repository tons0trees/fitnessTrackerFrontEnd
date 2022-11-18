import React, { useEffect, useState } from "react";
import { getRoutinesByActivity } from "../api/Activities";
import { useParams } from "react-router-dom";
import { RoutineList } from "./"

const MatchByActivities = () => {
  const [routinesList, setRoutinesList] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function callGetRoutinesByActivity() {
      const activityMatch = await getRoutinesByActivity({
        activityId: params.activityId,
      });
      setRoutinesList(activityMatch);
    }
    callGetRoutinesByActivity();
  }, []);

  return (
    <div className="match_by_activity">
      {RoutineList.length ? <RoutineList list={routinesList} setList={setRoutinesList} isOwner={false} /> : null}
    </div>
  );
};
export default MatchByActivities;
