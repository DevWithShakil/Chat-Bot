/* eslint-disable react/prop-types */
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>

            <PrettyChatWindow
                projectId='ca1600ae-6009-4857-ace0-d37580f4f341'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
};
export default ChatsPage;