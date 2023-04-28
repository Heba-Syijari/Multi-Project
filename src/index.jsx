import ForgeUI, { render, AdminPage, Fragment, Text } from '@forge/ui';

import { View } from './components/View';
import { Edit } from './components/Edit';
import { Admin } from './components/admin';
import { ContextConfig } from './components/ConfigureContext';

export const runView = render(<View />);
export const runEdit = render(<Edit />);
export const runContextConfig = render(<ContextConfig />);
export const run = render(<Admin />);
