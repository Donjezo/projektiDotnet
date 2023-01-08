
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";
import ActivityDetail from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActiviList";

interface props {
  activitis: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitin:boolean
}

export default function ActivityDashbord({
  activitis,
  selectActivity,
  cancelActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitin,
}: props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activitis}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
          submitin={submitin}
        />
      </Grid.Column>
      <GridColumn width="6">
        {selectedActivity && !editMode && (
          <ActivityDetail
            activit={selectedActivity}
            cancelSelectActivity={cancelActivity}
            openForm={openForm}
          ></ActivityDetail>
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            createOrEdit={createOrEdit}
            submitin={submitin}
          ></ActivityForm>
        )}
      </GridColumn>
    </Grid>
  );
}
