import Layout from "../Layout";
import VideoItem from "../components/Videos/VideoItem";
import { useEffect, useState } from "react";
import { getAllVideosWithSearch } from "../services/apiServices";

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const fetchData = async () => {
        let videoItems = await getAllVideosWithSearch();
        setVideos(videoItems);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Layout layoutTitle="Videolar" generatePage={false}>
            {
                videos.map((video) => {
                    return (
                        <VideoItem title={video.snippet.title} content={video.snippet.description} key={video.id.videoId} videoId={video.id.videoId} image={video.snippet.thumbnails.medium.url} />
                    )
                })
            }

        </Layout>
    );
};

export default Videos;