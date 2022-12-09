import http from '../http-common';

class PostService {

    getAll() {
        return http.get('/post/all')
    }

    get(id) {
        return http.get(`/post/${id}/edit`);
    }

    create(data) {
        return http.post("/post/store", data);
    }

    update(id, data) {
        return http.put(`/post/${id}/update`, data);
    }

    delete(id) {
        return http.delete(`/post/${id}/destroy`);
    }

}

export default new PostService();