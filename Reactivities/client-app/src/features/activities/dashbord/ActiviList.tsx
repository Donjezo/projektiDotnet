import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitin: boolean;
}

export default function ActivityList({
  activities,
  submitin,
  selectActivity,
  deleteActivity,
}: Props) {
  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                ></Button>
                <Button
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  floated="right"
                  content="delete"
                  color="red"
                  loading={submitin && target === activity.id}
                  name={activity.id}
                ></Button>
                <Label basic content={activity.category}></Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
