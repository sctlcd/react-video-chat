import React from 'react';

const VideoChat = () => {
    const [username, setUsername] = useState('');
    const [roomName, setRoomName] = useState('');
    const [token, setToken] = useState(null);

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    };

    const handleRoomNameChange = event => {
        setRoomName(event.target.value);
    };

    <div></div> // To be build later
};

export default VideoChat;