import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../API/YoutubeAPI';
import PlaylistVideoCard from './PlaylistVideoCard';

const PlaylistDetails = (props) => {
    const { pid } = useParams();

    const [channelPlaylistsVideos, setChannelPlaylistsVideos] = useState();
    useEffect(() => {
        fetchPlaylistVideos();
    }, [])

    const fetchPlaylistVideos = () => {
        fetchData(`playlist?id=${pid}`).then((res) => {
            console.log(res.data);
            setChannelPlaylistsVideos(res.data);
        })
    }
    return (
        <><div>
            <div className='flex justify-center'>
                {channelPlaylistsVideos &&
                    <div className='mt-[80px] rounded-xl w-96 bg-slate-300 p-5'>
                        <div className='w-full relative'>
                            <img src={channelPlaylistsVideos.meta.thumbnail[3].url || channelPlaylistsVideos.meta.thumbnail[0].url} className='w-full' alt="thumbnail" />
                            <div className='text-white text-center absolute right-2 bottom-2'>
                                <img src="/images/playlist.png" className='w-7' alt="playlist" />
                            </div>
                        </div>
                        <div className='ml-3'>
                            <h1 className='font-bold mt-2 text-lg'>{channelPlaylistsVideos.meta.title}</h1>
                            <h3 className='font-semibold mt-2 text-sm'>{channelPlaylistsVideos.meta.channelTitle}</h3>
                            <div className='flex mt-3'>
                                <h5 className='text-xs'>{channelPlaylistsVideos.meta.videoCountText}</h5>
                                <h5 className='text-xs ml-3'>{channelPlaylistsVideos.meta.viewCountText}</h5>
                                <h5 className='text-xs ml-3'>{channelPlaylistsVideos.meta.lastUpdated}</h5>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <hr className='my-3'/>
            <div className='flex flex-wrap justify-center'>
                {channelPlaylistsVideos &&
                    channelPlaylistsVideos.data.map((elem,index)=>
                    {
                        return <PlaylistVideoCard video={elem} key={index}/>
                    })
                }
            </div>
        </div>
        </>
    )
}

export default PlaylistDetails