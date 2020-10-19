import axios from 'axios'
const baseUrl = 'http://localhost:8080/api'

export default {
    postMessage(url = baseUrl){
        return{
            fetchAll:()=>axios.get(url+'/posts'),//read(get)
            fetchbyId:id=>axios.get(url+'/posts/'+id),
            create:newrecord=>axios.post(url+'/post',newrecord),//create(post)
            update:(id,updaterecord)=>axios.put(url+'/update/'+id,updaterecord),//update(put)
            delete:id=>axios.delete(url+'/delete/'+id)//delete(delete)
        }
    }
}