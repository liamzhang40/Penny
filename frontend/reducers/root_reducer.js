import { 
    combineReducers
} from 'redux';
import entities from './entities/entity_reducer';
import ui from './ui/ui_reducer';
import session from './session_reducer';

const rootReducer = combineReducers({
    entities,
    ui,
    session
});

export default rootReducer;