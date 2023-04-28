import ForgeUI, {
  AdminPage,
  Fragment,
  Text,
  useState,
  RadioGroup,
  Radio,
  Form,
  CheckboxGroup,
  Checkbox,
  ButtonSet,
  Button,
  Heading,
} from '@forge/ui';

export const Admin = () => {
  const [formState, setFormState] = useState(undefined);
  const onSubmit = async (formData) => {
    setFormState(formData);
  };

  const goBack = () => {};
  const cancel = () => {};
  const actionButtons = [<Button text="Cancel" onClick={cancel} />];
  return (
    <AdminPage>
      <Fragment>
        <Form onSubmit={onSubmit} actionButtons={actionButtons}>
          <RadioGroup name="select" label="Select Jira projects">
            <Radio defaultChecked label="Project" value="Project" />
            <Radio label="Categories" value="Categories" />
            <Radio
              label="ProjectType"
              value="ProjectType"
              description="Select indivdual Jira projects or project categories which you would like to be shown in the Multi Project Picker field."
            />
          </RadioGroup>
          <Heading size="small">
            Select indivdual Jira projects or project categories which you would
            like to be shown in the Multi Project Picker field.
          </Heading>
          <CheckboxGroup name="pro">
            <Checkbox value="HelpDesk" label="HelpDesk" />
            <Checkbox value="Development" label="Development" />
            <Checkbox value="Project 1" label="Project 1" />
            <Checkbox value="Project 2" label="Project 2" />
            <Checkbox value="Project 3" label="Project 3" />
          </CheckboxGroup>
        </Form>
      </Fragment>
    </AdminPage>
  );
};
