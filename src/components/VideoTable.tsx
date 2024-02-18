import { useState, useEffect } from 'react';

const VideoTable = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://localhost:8000/api/v1/videos/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setVideos(data);
      }) 
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);


  // Mock Data
  // const vidRes = {
  //   "count": 10,
  //   "next": "http://localhost:8000/api/v1/videos/?page=2",
  //   "previous": null,
  //   "results": [
  //       {
  //           "id": 1,
  //           "title": "Never Gonna Give You Up",
  //           "author": "Rick Astley",
  //           "description": "N/A",
  //           "release_date": "2009-10-25",
  //           "url": "https://www.youtube.com/embed/dQw4w9WgXcQ?si=V6boHUcSECVY-q9J",
  //           "created_at": "2022-08-03T16:32:40.623000Z",
  //           "updated_at": "2022-08-03T16:32:40.623000Z"
  //       },
  //       {
  //           "id": 2,
  //           "title": "Ramito De Violetas",
  //           "author": "Mi Banda El Mexicano",
  //           "description": "N/A",
  //           "release_date": "2015-07-02",
  //           "url": "https://www.youtube.com/embed/k6ILXeImxRA?si=BfShTXW2yvh5Mn88",
  //           "created_at": "2022-08-03T16:32:40.623000Z",
  //           "updated_at": "2022-08-03T16:32:40.623000Z"
  //       },
  //       {
  //           "id": 3,
  //           "title": "La Bikina",
  //           "author": "Luis Miguel",
  //           "description": "N/A",
  //           "release_date": "2008-05-31",
  //           "url": "https://www.youtube.com/embed/NCvJwzDQTBM?si=-1cM7AUfNSq3DYaB",
  //           "created_at": "2022-08-03T16:32:40.623000Z",
  //           "updated_at": "2022-08-03T16:32:40.623000Z"
  //       },
  //       {
  //           "id": 4,
  //           "title": "Call Me Maybe",
  //           "author": "Carly Rae Jepsen",
  //           "description": "Broken Link",
  //           "release_date": "2012-05-01",
  //           "url": "https://www.youtube.com/embed/fWNaR-rxAic?si=C75XwK72C",
  //           "created_at": "2022-08-03T16:32:40.623000Z",
  //           "updated_at": "2022-08-03T16:32:40.623000Z"
  //       },
  //       {
  //           "id": 5,
  //           "title": "Happy",
  //           "author": "Pharrell Williams",
  //           "description": "N/A",
  //           "release_date": "2014-06-08",
  //           "url": "https://www.youtube.com/embed/ZbZSe6N_BXs?si=aHjad92vBRCI0tAP",
  //           "created_at": "2022-08-03T16:32:40.623000Z",
  //           "updated_at": "2022-08-03T16:32:40.623000Z"
  //       }
  //   ]
  // }

  return (
    <>
    {loading && <p>Loading...</p>}
    {!loading && <>
      <div className='basis-8/12'>
        <table>
        {videos.map((video) => (
          <tr key={video.id} className="p-2 flex flex-row mb-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-7xl">
            <td><iframe id={`${video.id}-frame`} allowFullScreen width="640" height="360" className="h-48 w-full object-cover md:h-full md:w-52 mr-2 " src={video.url} /></td>
            <td className="w-48 p-2">
              <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{video.title}</p>
              <p className="mt-2 text-slate-500">Released on {video.release_date} by {video.author}</p>
            </td>
          </tr>
        ))}
        </table>
      </div>
     </>}
    </>
  );
};
export default VideoTable;