import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";

interface Props {
  activit: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

export default function ActivityDetail({ activit, openForm,cancelSelectActivity }: Props) {
  return (
    <>
      <Card fluid>
        <Image src={`/assets/categoryImages/${activit.category}.jpg`} />
        <Card.Content>
          <Card.Header>{activit.title}</Card.Header>
          <Card.Meta>
            <span>{}</span>
          </Card.Meta>
          <Card.Description>{activit.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths="2">
            <Button onClick={() => openForm(activit.id)} basic color="blue">
              Edit
            </Button>
            <Button onClick={cancelSelectActivity} basic color="grey">
              Cancel
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
}