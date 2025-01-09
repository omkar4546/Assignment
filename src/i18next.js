import i18n from "i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
import {initReactI18next, Translation} from 'react-i18next'


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true, 
    fallbackLng:"en",
    returnObjects:true,
    lng:"hi",
    resources:{
        en:{
             translation:{
                greeting:"Hellow,Welcome!",
             }
        },
        fr:{
            translation:{
                greeting:"Bonjour, bienvenue !",
             }

        },
        hi:{
            translation:{
                greeting:"नमस्ते, स्वागत है!",
             }
        }
    }

})  