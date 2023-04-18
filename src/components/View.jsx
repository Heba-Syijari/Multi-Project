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
let i = -1;
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
            <Text>{value}</Text>
            {projectFieldContext.map((e) => (
              <Fragment>
                {projects.map((p) =>
                  p == e.name ? (
                    <Fragment>
                      <Image
                        src={e.avatarUrls['16x16']}
                        alt="avatar"
                        size="xsmall"
                      />
                      <Text>{`${p} \n`}</Text>
                    </Fragment>
                  ) : (
                    <Text></Text>
                  )
                )}
              </Fragment>
            ))}
          </Fragment>
        ) : (
          <Text>{noValues}</Text>
        )}
      </Fragment>
    </CustomField>
  );
};
