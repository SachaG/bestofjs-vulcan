import { addRoute, Components } from 'meteor/vulcan:core';

import '../components/projects/ProjectsList.jsx';

addRoute({ name: 'projects', path: '/', componentName: 'ProjectsList' });
