import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

export const ApiContext = createContext({})

function ApiProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false)
    const [classes, setClasses] = useState(false)
    const [lessons, setLessons] = useState(false)
    const [content, setContent] = useState(false)

    async function getApiData() {
        const { data: userReq } = await api.get(`users`);
        const { data: classesReq } = await api.get('classes');
        const { data: lessonsReq } = await api.get('lessons');
        const { data: contentReq } = await api.get('content');

        const userObj = userReq[0];
        
        setUser(userObj);
        setClasses(classesReq);
        setLessons(lessonsReq);
        setContent(contentReq);
        
        setLoading(false);
    }

    return (
        <ApiContext.Provider value={{ user, classes, lessons, content, getApiData, loading }}>
            {children}
        </ApiContext.Provider>
    )
}
function useApi() {
    const context = useContext(ApiContext);

    return context
}
export {
    ApiProvider,
    useApi,
}