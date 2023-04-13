import ForgeUI, {
  CustomField,
  Fragment,
  useProductContext,
  Text,
  useState,
  Image,
} from '@forge/ui';
import api from '@forge/api';
import { viewComponentText } from '../data/textFields';
import { getCustomFieldContext, getAllProject } from '../utils/utils';
// import { DEFAULT_CONTEXT_CONFIG } from "../data/data";

export const View = () => {
  const {
    extensionContext: { fieldValue, fieldId },
  } = useProductContext();
  const [customFieldContext] = useState(getCustomFieldContext(fieldId));
  const [projectFieldContext] = useState(getAllProject());
  let [{ configuration }] = customFieldContext;
  /* if(!configuration) {
    configuration = {...DEFAULT_CONTEXT_CONFIG};
  }*/

  const { value, noValues, noConfiguration } = viewComponentText;
  const projects = fieldValue?.projects;

  return (
    <CustomField>
      <Fragment>
        {projects ? (
          <Fragment>
            <Text>
              {value} {projects}
            </Text>
            {projectFieldContext.map((e) => (
              <Image src={e.avatarUrls['16x16']} alt="avatar" size="xsmall" />
            ))}
          </Fragment>
        ) : (
          <Text>{noValues}</Text>
        )}
      </Fragment>
    </CustomField>
  );
};
