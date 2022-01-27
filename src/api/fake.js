const api = {
    get() {
        return Promise.resolve({
          data: [
            {id: 1, title: 'post 1'},
          ],
        });
    },
};

export default api;