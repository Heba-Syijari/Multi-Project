import ForgeUI, {
  CustomField,
  Fragment,
  useProductContext,
  Text,
  useState,
} from '@forge/ui';
import api from '@forge/api';
import { viewComponentText } from '../data/textFields';
import { getCustomFieldContext } from '../utils/utils';
// import { DEFAULT_CONTEXT_CONFIG } from "../data/data";

export const View = () => {
  const {
    extensionContext: { fieldValue, fieldId },
  } = useProductContext();
  const [customFieldContext] = useState(getCustomFieldContext(fieldId));
  let [{ configuration }] = customFieldContext;
  /* if(!configuration) {
    configuration = {...DEFAULT_CONTEXT_CONFIG};
  }*/

  //const { provision } = configuration;
  const { value, noValues, noConfiguration } = viewComponentText;
  const projects = fieldValue?.projects;
  //  const currencySummaryAmount = fieldValue?.projects?.amount;
  // const currencySummaryCurrency = fieldValue?.projects?.currency;
  // const summaryAfterProvision = (currencySummaryAmount - (provision / 100) * currencySummaryAmount).toFixed(2);

  return (
    <CustomField>
      <Fragment>
        {projects ? (
          <Fragment>
            <Text>
              {value} {projects}
            </Text>
          </Fragment>
        ) : (
          <Text>{noValues}</Text>
        )}
        {/* <Text>project1 project2</Text> */}
      </Fragment>
    </CustomField>
  );
};
