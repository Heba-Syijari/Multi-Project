import React from 'react';
import { CheckboxSelect } from '@atlaskit/select';
import Select from '@atlaskit/select';
import ForgeUI, {
  CustomFieldEdit,
  useProductContext,
  //Select,
  Option,
  useState,
} from '@forge/ui';
import {
  getCustomFieldContext,
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

  // const [arrayFields, setArrayFields] = useState(
  //   Object.values(fieldValue || DEFAULT_FIELD_VALUE).slice(0, -1)
  // );
  let [{ configuration }] = customFieldContext;
  /*if (!configuration) {
    configuration = { ...DEFAULT_CONTEXT_CONFIG };
  }
  const { currencyExchangeCourses, maxCurrencyCalculationRows } = configuration;
  const currencies = currencyExchangeCourses.map((e) => e.label);
  const userSummCurrency = fieldValue?.projects?.currency;*/

  const onSubmit = (formValue) => {
    const copy = JSON.parse(JSON.stringify(formValue));
    // const outcome = setOutcomeProps(maxCurrencyCalculationRows, copy);
    // const calculatedCurrency = currencyConversion(
    //   outcome,
    //   currencyExchangeCourses
    // );
    // return calculatedCurrency;
  };
  return (
    <>
      <label htmlFor="multi-select">Choose project</label>
      <Select
        inputId="multi-select"
        className="multi-select"
        classNamePrefix="react-select"
        options={[
          { label: 'project1', value: 'project1' },
          { label: 'project2', value: 'project2' },
          { label: 'project3', value: 'project3' },
          { label: 'project4', value: 'project4' },
          { label: 'project5', value: 'project5' },
          { label: 'project6', value: 'project6' },
        ]}
        isMulti
        isSearchable={false}
        placeholder="Choose a project"
      />
    </>
  );
  // <CustomFieldEdit onSubmit={onSubmit}>
  //   <Select
  //     isMulti={true}
  //     isRequired={true}
  //     label="Choose project"
  //     name="projects"
  //   >
  //     /* {currencies.map((e) => (
  //       <Option
  //         defaultSelected={userSummCurrency === e}
  //         label={e}
  //         value={e}
  //       />
  //     ))} */
  //     {(() => {
  //       let options = [];
  //       for (let i = 1; i <= 10; i++) {
  //         options.push(<Option key={i} value={i} label={`project ${i}`} />);
  //       }
  //       return options;
  //     })()}
  //   </Select>
  // </CustomFieldEdit>
};
