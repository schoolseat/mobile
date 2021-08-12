import React, { createContext, useContext, useState } from 'react';
import { Alert, Platform, ToastAndroid } from 'react-native'

import api from '../services/api';

export const ApiContext = createContext({})

function alert(data) {
    Platform.OS === "ios"
        ? Alert.alert(data[0], data[1])
        : ToastAndroid.show(
            data[1],
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        );
}
function ApiProvider({ children }) {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [classes, setClasses] = useState(false);
    const [lessons, setLessons] = useState(false);
    const [content, setContent] = useState(false);

    async function getApiData({ login }) {
        const { data: userReq } = await api.post(`auth`, login).catch((e) => {
            alert(["Ops", 'Seu e-mail ou senha parecem estar errados!'])
        })
        setUser(userReq);
        
        const { data: classesReq } = await api.get('classes', {
            headers: {
                'x-access-token': user.token
            }
        });
        setClasses(classesReq);

        const { data: lessonsReq } = await api.get('lessons', {
            headers: {
                'x-access-token': user.token
            }
        });
        setLessons(lessonsReq);

        const { data: contentReq } = await api.get('content', {
            headers: {
                'x-access-token': user.token
            }
        });
        setContent(contentReq);
        setLoading(false);
    }
    async function postApiData({ data, isClasses, isLessons, isContent, isCreateAccount }) {
        if (isClasses) {
            const classesPost = await api.post("classes", data, {
                headers: {
                    'x-access-token': user.token
                }
            })
            setLoading(false);
            return classesPost;
        }
        if (isLessons) {
            const lessonsPost = await api.post("lessons", data, {
                headers: {
                    'x-access-token': user.token
                }
            })
            setLoading(false);
            return lessonsPost;
        }
        if (isContent) {
            const contentPost = await api.post("content", data, {
                headers: {
                    'x-access-token': user.token
                }
            })
            setLoading(false);
            return contentPost;
        }
        if (isCreateAccount) {
            const { data: userReq } = await api.post("users", data)

            setLoading(false);
            setUser(userReq);
        }
        setLoading(false);
        return new Error("You must provide the type of post !")
    }
    async function getDataById({ id, isUser, isClasses, isContent, isLessons }) {
        if (isClasses) {
            const classesPost = await api.get(`classes/${id}`, {
                headers: {
                    'x-access-token': user.token
                }
            })
            setLoading(false);
            return classesPost;
        }
        if (isLessons) {
            const lessonsPost = await api.get(`lessons/${id}`, {
                headers: {
                    'x-access-token': user.token
                }
            })
            setLoading(false);
            return lessonsPost;
        }
        if (isContent) {
            const contentPost = await api.get(`content/${id}`, {
                headers: {
                    'x-access-token': user.token
                }
            })
            setLoading(false);
            return contentPost;
        }
        if (isUser) {
            const { data: userReq } = await api.get(`users/${id}`)

            setLoading(false);
            return userReq;
        }
        setLoading(false);
        return new Error("You must provide the type of request !")
    }
    return (
        <ApiContext.Provider value={{ user, classes, lessons, content, getApiData, postApiData, getDataById, loading }}>
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