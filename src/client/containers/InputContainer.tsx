import { connect } from 'react-redux';

import { Message } from '../reducers/chatReducer';
import Input from '../components/Input';
import { addChatAction , chatBotAction} from '../actions/chatActions';
import { chat2Server } from '../utils/socket_io';
import chatActionMiddleWare from '../utils/AddChatMiddleware';

const mapStateToProps = (state) => {

  return {
    isAuth: state.authReducer.isAuth,
    user: state.userState.name
  };
};

let votes = [0, 0];
export const getVotes = () => votes;

// TODO: decide if this should be on server side?
const parseChat = (message: Message, dispatch) => {
  if (message.text.indexOf('#') > -1) {
    const actions = message.text.match(/\#\S+/gi);
    console.log(actions);
    const targets = message.text.replace(/\#\S+/gi, '');
  }
  return dispatch(addChatAction(message));
};

const mapDispatchToProps = (dispatch) => {
  return {
    addChat: (message) => {
      chatActionMiddleWare(addChatAction(message), dispatch);
    },
    authError: (message) => { 
      dispatch(chatBotAction(message))
    }
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);