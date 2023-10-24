import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import intro1Svg from '../assets/1.svg';
import intro2Svg from '../assets/2.svg';
import intro3Svg from '../assets/3.1.svg';
import './Intro.css'
import 'swiper/css';

interface ContainerProps{
    onFinish : () => void;
}

const SwipperButtonText = ({children}: any) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
}

const Intro: React.FC <ContainerProps>= ({onFinish}) => {
    return (
    <Swiper>
        <SwiperSlide>
            <img src={intro1Svg} alt='Intro 1' />
            <IonText>
                <h5 >hello guys, welcome my tamplates UI Login for Ionic Framework</h5>
            </IonText>
            <SwipperButtonText>Next</SwipperButtonText>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={intro2Svg} alt='Intro 2' />
            <IonText>
                <h5 >The Ionic framework is a versatile cross-platform development framework that enables the creation of web-based, iOS, and Android applications</h5>
            </IonText>
            <SwipperButtonText>Next</SwipperButtonText>
        </SwiperSlide>

        <SwiperSlide>
            <img src={intro3Svg} alt='Intro 3' />
            <IonText>
                <h5 >Curious? Join us now to access the templates I've created.</h5>
            </IonText>
            <IonButton onClick={()=> onFinish()}>Finish</IonButton>
        </SwiperSlide>
    </Swiper>
    );
};

export default Intro;