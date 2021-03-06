import {
  CHANGE_ARTICLE_INFO,
  PUSH_ARTICLE,
  PUSH_ARTICLE_SUCCESS,
  PUSH_ARTICLE_ERROR,
  CHANGE_PRIVATE_ARTICLE,
  CHANGE_HIGHLIGHT_CURRENT,
  FETCH_EDITED_ARTICLE,
  FETCH_EDITED_ARTICLE_SUCCESS,
  DELETE_ARTICLE,
  DELETE_ARTICLE_SUC,
  CHANGE_DELETE_DIALOG,
} from './constants';

import { fromJS, List } from 'immutable';

const initialState = fromJS({
  articleInfo: {
    title: '',
    tags: '',
    content: '',
    published: true,
    loading: false,
  },
  highlight: '',
  privateList: [],
  dialogState: false,
  deleteRequest: false,
  requesting: false,
  err: '',
});

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ARTICLE_INFO:
      return state.mergeDeep(fromJS({ articleInfo: action.info }));
    case PUSH_ARTICLE:
      return state.set('requesting', true);
    case PUSH_ARTICLE_SUCCESS:
      return state.set('requesting', false);
    case PUSH_ARTICLE_ERROR:
      return state.set('requesting', false);
    case CHANGE_PRIVATE_ARTICLE:
      return state.set('privateList', new List(action.data));
    case CHANGE_HIGHLIGHT_CURRENT:
      return state.set('highlight', action.id);
    case FETCH_EDITED_ARTICLE:
      return state.setIn(['articleInfo', 'loading'], true);
    case FETCH_EDITED_ARTICLE_SUCCESS:
      return state.setIn(['articleInfo', 'loading'], false);
    case CHANGE_DELETE_DIALOG:
      return state.set('dialogState', action.val);
    case DELETE_ARTICLE:
      return state.set('deleteRequest', true);
    case DELETE_ARTICLE_SUC:
      return state.set('deleteRequest', false);
    default:
      return state;
  }
}
export default articleReducer;
