import instance from "@/lib/axios";

const productService = {

    getAllProducts: async (params) => {
        return await instance.get("/posts", { params });
    },

    getProductById: async (id) => {
        return await instance.get(`/posts/${id}`);
    },


    createProduct: async (productData) => {
        return await instance.post("/posts/", productData);
    },

    updateProduct: async (id, productData) => {
        return await instance.put(`/posts/${id}`, productData);
    },

    deleteProduct: async (id) => {
        return await instance.delete(`/posts/${id}`);
    },

    getProductsByCategory: async (categoryId) => {
        return await instance.get(`/categories/${categoryId}/posts`);
    },
    createProduct: async (productData) => {
        return await instance.post("/posts/", productData);
    },
};

export default productService;