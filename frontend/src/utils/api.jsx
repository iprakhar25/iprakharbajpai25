import axios from 'axios';

const API_BASE_URL = 'http://localhost:5144/api/github'; // Ensure this matches your .NET API URL

export const fetchGitHubProjects = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/projects`);
        return response.data; // Returns array of projects
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
};
