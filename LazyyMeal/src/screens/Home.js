import { useEffect, useState } from 'react';
import Layout from '../Layout';
import Category from '../components/Home/Category';
import { Image, View, Text } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { getMealInfoRgx, titleControl } from '../services/services';
const Home = () => {
    const [titles, setTitles] = useState([]);
    const [counterKey, setCounterKey] = useState(0);
    const context = useContext(AppContext);
    var counter = 0;


    const getCurrentColor = () => {
        counter = counter + 1;
        if (counter === 1) {
            return "#F9BF4F";
        } else if (counter === 2) {
            return "#CC3E3E";
        } else if (counter === 3) {
            counter = 0; // Reset counter for the next cycle
            return "#323232";
        }
    };

    useEffect(() => {
        // fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCeh3XQszWO6lLdKz_SZmm1Q&key=AIzaSyBk1Bwbn1A-dakmipdDKFhcd6DW1Mkg1eM&maxResults=114&pageToken=CAUQAA')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setTitles(data.items);
        //     });
        setTitles(context.filterItems);
        getMealInfoRgx();
    }, [context.filterItems]);
    return (
        <Layout layoutTitle="Kategoriler">
            {titles.map((item) => {
                if (titleControl(item)) {
                    const currentColor = getCurrentColor();

                    return (
                        <Category
                            title={item.snippet.title}
                            playListId={item.id}
                            image={
                                <Image
                                    source={{ uri: item.snippet.thumbnails.high.url }}
                                    style={{
                                        width: 180,
                                        height: 100,
                                        borderRadius: 16,
                                        position: 'absolute',
                                        right: 4,
                                        bottom: 25,
                                    }}
                                />
                            }
                            backgroundColor={currentColor}
                            color={currentColor === "#323232" ? 'white' : 'black'}
                            key={item.snippet.title}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </Layout>
    );
};

export default Home;
