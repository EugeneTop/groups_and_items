import { combineReducers } from 'redux';

import groups from './groups';
import items from './items';
import count from './count'
import infoItem from './infoItem';

export default combineReducers({
    groups,
    items,
    count,
    infoItem
});
