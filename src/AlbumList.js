import{useState} from "react";
import  './AlbumList.css' ;
function AlbumList(){ 
    getAlbums();
    let[photos, setPhotos] = useState([]);  // in oder to trigger a
    
    if(photos.length){
        getAlbums();
    }
    async function getAlbums(){
        photos = await(await fetch("https://jsonplaceholder.typicode.com/photos")).json(); //why twice
        console.log(photos);
        setPhotos(photos);

        }
   return(
       <div>
           <Counter></Counter>
           <input placeholder = "Albumid"> </input> <button> Searcch</button>
           <table>  
               <thead>

                 <td> Title</td>
                   <td>URL</td>
                   </thead>   
                   <tbody>                                                             
           {
               photos.map( function (photo)  {
                   // console.log(photo);
                   return <tr><td>{photo.title}</td>
                   <td>{photo.url}</td></tr>           
               
               })
           } </tbody>
           </table>
       </div>
               )
        }
    export default AlbumList;