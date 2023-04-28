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
  CustomFieldContextConfig,
} from '@forge/ui';
import { getAllProject } from './../utils/utils';

export const ContextConfig = () => {
  const [formState, setFormState] = useState(undefined);
  const [projectFieldContext] = useState(getAllProject());
  const onSubmit = async (formData) => {
    setFormState(formData);
  };
  return (
    <CustomFieldContextConfig onSubmit={onSubmit}>
      <Heading size="large">Jira projects</Heading>
      <RadioGroup name="select" label="Select Jira projects">
        <Radio defaultChecked label="Project" value="Project" />
        <Radio label="Categories" value="Categories" />
        <Radio
          label="ProjectType"
          value="ProjectType"
          description="Select indivdual Jira projects or project categories which you would like to be shown in the Multi Project Picker field."
        />
      </RadioGroup>
      <Text>
        Select indivdual Jira projects or project categories which you would
        like to be shown in the Multi Project Picker field.
      </Text>
      <CheckboxGroup name="pro">
        {projectFieldContext.map((e) => (
          <Checkbox label={e.name} value={`${e.name}`} />
        ))}
      </CheckboxGroup>
    </CustomFieldContextConfig>
  );
};
