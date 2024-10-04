export { getAllUser, deleteUser, createUser };

const baseURL = 'http://myapi-address.com/api/users';

const getAllUsers = async () => {
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

const createUser = async (userData) => {
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const response = await fetch(`${baseURL}/${userId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
        return response.json();
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export { getAllUsers, createUser, deleteUser };