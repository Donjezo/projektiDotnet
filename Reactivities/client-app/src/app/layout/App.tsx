import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { Activity } from "../modules/activity";
import NavBar from "./NavBar";
import ActivityDashbord from "../../features/activities/dashbord/ActivityDashbord";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import LoadingComponent from "./loadingCoponent";

function App() {
  const [activitues, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitin, setSubmiting] = useState(false);

  useEffect(() => {
    agent.Activities.list().then((response) => {
      let activities: Activity[] = [];
      response.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        activities.push(activity);
      });
      setActivities(activities);
      setLoading(false);
    });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activitues.find((x) => x.id === id));
  }
  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }
  function handleFormClosed() {
    setEditMode(false);
  }
  function HandleCreateOrEditActivity(activity: Activity) {
    setSubmiting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([
          ...activitues.filter((x) => x.id !== activity.id),
          activity,
        ]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmiting(false);
      });
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activitues, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmiting(false);
      });
    }
  }
  function handleDeleteActivity(id: string) {
    setSubmiting(true)
    agent.Activities.delete(id).then(() => {
      setActivities([...activitues.filter((x) => x.id !== id)])
      setSubmiting(false)
    })
  

    

  }

  if (loading)
    return <LoadingComponent content="Loading app"></LoadingComponent>;
  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashbord
          activitis={activitues}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClosed}
          createOrEdit={HandleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitin={submitin}
        />
      </Container>
    </>
  );
}

export default App;
