import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";

interface props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitin:boolean
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
  submitin,
}: props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };
  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.TextArea
          value={activity.description}
          name="descriptionle"
          placeholder="Desction"
          onChange={handleInputChange}
        ></Form.TextArea>
        <Form.Input
          value={activity.category}
          name="category"
          placeholder="Category"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input
          type="date"
          value={activity.date}
          name="date"
          placeholder="Date"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input
          value={activity.city}
          name="city"
          placeholder="City"
          onChange={handleInputChange}
        ></Form.Input>
        <Form.Input
          value={activity.venue}
          name="venue"
          placeholder="Venue"
          onChange={handleInputChange}
        ></Form.Input>
        <Button
          floated="right"
          positive
          type="submit"
          content="submit"
          loading={submitin}
        ></Button>
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="cancel"
        ></Button>
      </Form>
    </Segment>
  );
}
