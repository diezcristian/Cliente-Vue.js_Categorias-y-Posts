import http from '../http-common';

class CategoryService {

    getAll() {
        return http.get('/category/all')
    }

    get(id) {
        return http.get(`/category/${id}/edit`);
    }

    create(data) {
        return http.post("/category/store", data);
    }

    update(id, data) {
        return http.put(`/category/${id}/update`, data);
    }

    delete(id) {
        return http.delete(`/category/${id}/destroy`);
    }

}

export default new CategoryService();