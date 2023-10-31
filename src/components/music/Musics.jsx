import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineLike, AiOutlineEye, AiOutlineMessage, AiOutlineShareAlt } from 'react-icons/ai'
import "./Album.css"
import axios from 'axios'




const Musics = () => {
  const { id } = useParams()
  const [musics, setMusics] = useState(null)
  const [searchMusic, setSearchMusic] = useState('')
  useEffect(()=>{
      axios.get(`https://music-osvg.onrender.com/api/album/${id}`)
      .then(res => setMusics(res.data))
      .catch(error => console.log("errors: ",error))
  }, [id])

  if (musics === null) {
    return <div><h1>Loading...</h1></div>;
  }
  let handleMusicLike = ()=>{
    alert("This functionality is under processing!")
  }
  return (
    <div className='music'>
        <h2>Lists Of Musics in {musics.album_name}'s Album</h2>
        <input type='search' className='search__input' name='search' onChange={e=>{setSearchMusic(e.target.value)}} placeholder='Search the Music ...' />
          
        <div className='music-container'>
            
             {musics.musics_list.filter((val)=>{
                  if(searchMusic === ""){return val;}
                  else if(val.music_name.toLowerCase().includes(searchMusic.toLowerCase())){return val;}
                  
                }).map((val, key)=>{return <div className='music-container_list' key={key}>
                <ul className='music-container_list-title'>
                    <li className='music-artist'>
                        <p>{val.artist_name}</p>
                    </li>
                    <li className='music-name'>
                        <p>{val.music_name}</p>
                    </li>
                </ul>
                <div className='music-container_list-body'>
                    <img src={musics.avatar} alt="album name"/>
                </div>
                <div className='music-container_list-footer'>
                    <div><button className='btn__footer like' onClick={handleMusicLike}>{23} <AiOutlineLike/></button></div>
                    <div><button className='btn__footer view' onClick={handleMusicLike}>{43} <AiOutlineEye/></button></div>
                    <div><button className='btn__footer comment' onClick={handleMusicLike}>{102} <AiOutlineMessage/></button></div>
                    <div><button className='btn__footer share' onClick={handleMusicLike}> {1209} <AiOutlineShareAlt/></button></div>
                </div>
            </div>;})}

            {/* {musics.musics_list.map((music, index) =>{

              return 

            })}  */}
        </div>
    </div>
  )
}

export default Musics


