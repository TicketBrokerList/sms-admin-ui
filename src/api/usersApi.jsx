const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchUsers = async () => {
    try {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        const response = await fetch(`${baseUrl}/users/`, {
            method: 'GET'
        })
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        let jsonData = await response.json();
        // console.log(jsonData)
        let data159 = jsonData.map(resource => ({ ...resource, id: resource._id }))
        return {
            data: data159,
            total: data159.length
        }
    } catch (error) {
        return error
    }
}