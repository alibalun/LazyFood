import YoutubePlayer from 'react-native-youtube-iframe';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Player = (props) => {
    const route = useRoute();
    const {videoId} = route.params;
    return (
        <View>
            <YoutubePlayer
                height={400}
                videoId={videoId}
            />
        </View>
    )
}
export default Player;