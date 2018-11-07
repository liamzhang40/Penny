import { 
    combineReducers
} from 'redux';
import entities from './entities/entity_reducer';
import ui from './ui/ui_reducer';

const rootReducer = combineReducers({
    entities,
    ui
});

export default rootReducer;