import {hydrateRoot} from 'react-dom';
import Root from './Root.client';

hydrateRoot(
  document.getElementById('root'),
  <Root/>
);