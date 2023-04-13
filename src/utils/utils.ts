import api,{ route } from '@forge/api';

export async function getCustomFieldContext(fieldId) {
  const result = await requestJira(fieldId);
  return result.values;
}
export async function getAllProject() {
  const result = await requestJiraProject();
  //const projects = result.map((e) => (e.avatarUrls["16x16"]));
  return result;
}

async function requestJira(fieldId) {
  let transformedResponseJson;
  const response = await api
    .asUser()
     .requestJira(route`/rest/api/3/app/field/${fieldId}/context/configuration`);
    //.requestJira(route`/rest/api/3/field/{fieldId}/context/{contextId}/option`);
  try {
    transformedResponseJson = await response.json();
  } catch (e) {
    console.log("Error transformedResponseJson: ", e);
  }
  console.log("transformedResponseJson result: ", transformedResponseJson);
  return transformedResponseJson || {};
}

async function requestJiraProject () {
  let transformedResponseJson;
  const response = await api.asUser().requestJira(route`/rest/api/3/project`, {
    headers: {
      Accept: 'application/json',
    },
  });
  try {
    transformedResponseJson = await response.json();
  } catch (e) {
    console.log("Error transformedResponseJson: ", e);
  }
  console.log("transformedResponseJsonProject result: ", transformedResponseJson);
  return transformedResponseJson || {};
}
