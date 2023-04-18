import React from 'react';
import ForgeUI, {
  CustomFieldEdit,
  useProductContext,
  Select,
  Option,
  useState,
  //Form,
  // Text
} from '@forge/ui';
import {
  getCustomFieldContext,
  getAllProject,
  //   setOutcomeProps,
} from './../utils/utils';
// import {
//   DEFAULT_CONTEXT_CONFIG,
//   DEFAULT_CONFIGURATION,
// } from "../data/data";

export const Edit = () => {
  const {
    extensionContext: { fieldValue, fieldId },
  } = useProductContext();
  const [customFieldContext] = useState(getCustomFieldContext(fieldId));
  const [projectFieldContext] = useState(getAllProject());

  // const [arrayFields, setArrayFields] = useState(
  //   Object.values(fieldValue || DEFAULT_FIELD_VALUE).slice(0, -1)
  // );
  let [{ configuration }] = customFieldContext;
  /*if (!configuration) {
    configuration = { ...DEFAULT_CONTEXT_CONFIG };
  }*/

  const onSubmit = (formValue) => {
    const copy = JSON.parse(JSON.stringify(formValue));
    return copy;
  };

  return (
    <CustomFieldEdit onSubmit={onSubmit}>
      <Select
        isMulti={true}
        isRequired={true}
        label="Choose project"
        name="projects"
      >
        {projectFieldContext.map((e) => (
          <Option
            // defaultSelected={userSummCurrency === e}
            key={e.key}
            label={e.name}
            value={`${e.name}`}
          />
        ))}
      </Select>
      {/* {projectFieldContext.map((e) => (
        <Image src={e.avatarUrls['16x16']} alt="avatar" size="xsmall" />
      ))} */}
    </CustomFieldEdit>
    /* <select name="projects" multiple>
        {projectFieldContext.map((e) => (
          <option key={e.key} value={e.name}>
            <img src={e.avatarUrls['16x16']} alt="avatar" /> + ' ' +{e.name}
          </option>
        ))}
      </select> */
  );
};
