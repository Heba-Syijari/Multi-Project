# Multi Project Customfield

## Requirements

See [Getting Started](https://developer.atlassian.com/platform/forge/getting-started/) for instructions to get set up.

## Quick start

Once you have logged into the CLI (`forge login`), follow the steps below to install the app onto your site:

1. Clone this repository
2. Run `forge register` to register a new copy of this app to your developer account
3. Run `npm install` to install your dependencies
4. Run `forge deploy` to deploy the app into the default environment
5. Run `forge install` and follow the prompts to install the app

## Setup

### Create Custom Field.

1. From the JIRA projects go into settings in the right-up corner.
2. Go into Issues menu.
   ![jira settings - issues](docs/images/issues-settings.png)
3. Select "Custom fields" from the menu on the left in the "Fields" category.
4. Click "Create custom field" button.
5. Select a field type "Currency Exchange".
   ![Select a field type window](docs/images/field-type-settings.png)
6. Name Your field and click "Create".
7. Associate field to screens of Your choice and click "Update" to save changes.

### Setup context configuration (optional)

1. Go to the "Custom Fields" list from point 3 of previous instruction.
2. Search added custom Field by name given in the point 6 of previous instruction.
3. Click setting button on the right.
4. Choose contexts and default value.
   ![Select a field type window](docs/images/context-default-value.png)
5. Click edit Default Value or Edit Context Value.
6. Put necessary data and save changes.

## Documentation

### The app's [manifest.yml](./manifest.yml) is based on one module:

1. A [jira:customFieldType module](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-) lets you create a new custom field type in Jira. Based on that you can craete new custom fields.
2. Data structure used in the app is based on object data type provided by [jira:customField](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field--beta-_). Manifest contains _schema_ and _formatter_ from customField.
3. A corresponding [function module](https://developer.atlassian.com/platform/forge/manifest-reference/#function)
   that implements the app context configuration.

## Modules used in the app

- [`CustomField`](https://developer.atlassian.com/platform/forge/ui-kit-components/custom-field/) component
- [`CustomFieldEdit`](https://developer.atlassian.com/platform/forge/ui-kit-components/custom-field-edit/) component
- [`Button`](https://developer.atlassian.com/platform/forge/ui-components/button) component
- [`Fragment`](https://developer.atlassian.com/platform/forge/ui-kit-components/fragment/) component
- [`Text`](https://developer.atlassian.com/platform/forge/ui-components/text) component
- [`Table`](https://developer.atlassian.com/platform/forge/ui-components/table) component
- [`useState`](https://developer.atlassian.com/platform/forge/ui-hooks-reference/#usestate)
- [`useProductContext`](https://developer.atlassian.com/platform/forge/ui-hooks-reference/#useproductcontext)
