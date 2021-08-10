import React, { createContext, useContext, useState } from 'react';
import { Alert, Platform, ToastAndroid } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

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

    function getStorageData() {
        AsyncStorage.getItem('@school_seat/user')
            .then((userr) => userr != null ? setUser(JSON.parse(userr)) : false)
        AsyncStorage.getItem('@school_seat/classes')
            .then((classess) => classess != null ? setClasses(JSON.parse(classess)) : false)
        AsyncStorage.getItem('@school_seat/lessons')
            .then((lessonss) => lessonss != null ? setLessons(JSON.parse(lessonss)) : false)
        AsyncStorage.getItem('@school_seat/content')
            .then((contentt) => contentt != null ? setContent(JSON.parse(contentt)) : false)
    }
    async function getApiData({ login = {} }) {
        getStorageData();
        if (!user) {
            const { data: userReq } = await api.post(`auth`, login).catch((e) => {
                alert(["Ops", 'Seu e-mail ou senha parecem estar errados!'])
            })
            setUser(userReq);
            await AsyncStorage.setItem('@school_seat/user', JSON.stringify(userReq))
        }
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

        await AsyncStorage.setItem('@school_seat/classes', JSON.stringify(classesReq))
        await AsyncStorage.setItem('@school_seat/lessons', JSON.stringify(lessonsReq))
        await AsyncStorage.setItem('@school_seat/content', JSON.stringify(contentReq))
    }
    async function postApiData({ data, isClasses, isLessons, isContent, isCreateAccount }) {
        if (isClasses) {
            const classesPost = await api.post("classes", data, {
                headers: {
                    'x-access-token': user.token
                }
            })

            return classesPost;
        }
        if (isLessons) {
            const lessonsPost = await api.post("lessons", data, {
                headers: {
                    'x-access-token': user.token
                }
            })

            return lessonsPost;
        }
        if (isContent) {
            const contentPost = await api.post("content", data, {
                headers: {
                    'x-access-token': user.token
                }
            })

            return contentPost;
        }
        if (isCreateAccount) {
            const { data: userReq } = await api.post("users", data).catch((e) => console.error(e));

            setUser(userReq);
        }
        return new Error("You must provide the type of post !")
    }
    return (
        <ApiContext.Provider value={{ user, classes, lessons, content, getApiData, postApiData, loading }}>
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