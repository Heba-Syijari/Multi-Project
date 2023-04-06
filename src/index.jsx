import ForgeUI, { render } from '@forge/ui';

import { View } from './components/View';
import { Edit } from './components/edit';

export const runView = render(<View />);
export const runEdit = render(<Edit />);
