import {  MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
  
const ChatsPage = (props) =>{
    const chatProps =  useMultiChatLogic(
        '0e468b41-91b2-4011-a962-6c81c11da4aa',
        props.username,
        props.secret
        
    );
    return (
        <div style = {{height: '100vh'}}>
        <MultiChatWindow{...chatProps}/>
        <MultiChatSocket {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage;