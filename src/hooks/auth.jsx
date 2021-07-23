import React, { createContext, useContext, useState } from 'react';

import api from '../services/api';

export const ApiContext = createContext({})

function ApiProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false)
    const [classes, setClasses] = useState(false)
    const [lessons, setLessons] = useState(false)
    const [content, setContent] = useState(false)

    //{userId, classeId, lessonId, contentId}
    async function getApiData({login}) {
        const { data: userReq } = await api.post(`auth`, login);
        
        const { data: classesReq } = await api.get('classes', {
            headers: {
                'x-access-token': userReq.token
            }
        });
        const { data: lessonsReq } = await api.get('lessons', {
            headers: {
                'x-access-token': userReq.token
            }
        });
        const { data: contentReq } = await api.get('content', {
            headers: {
                'x-access-token': userReq.token
            }
        });

        setUser(userReq);
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