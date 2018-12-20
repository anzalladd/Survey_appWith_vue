import Api from './Api'

export default{
    fetchPost(){
        return Api().get('posts')
    },
    addPost(params){
        return Api().post('posts',params)
    },
    updatePost (params) {
        return Api().put('posts/' + params.id, params)
      },
    
      getPost (params) {
        return Api().get('post/' + params.id)
    },
    deletePost (id) {
        return Api().delete('posts/' + id)
    }
}