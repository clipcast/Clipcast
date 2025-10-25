import { useEffect, useState } from 'react';
import axios from 'axios';

const useClips = () => {
    const [clips, setClips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClips = async () => {
            try {
                const response = await axios.get('/api/clips');
                setClips(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchClips();
    }, []);

    return { clips, loading, error };
};

export default useClips;