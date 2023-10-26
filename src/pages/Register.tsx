import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkCircleOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter();
    const doRegister = (event:any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'dark'}>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/'></IonBackButton>
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} >
            <IonGrid fixed>
                    <IonRow class='ion-justify-content-center' >
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                        <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput fill='outline' label='Email' labelPlacement='floating' placeholder='Enter text' type='email'/>
                            <IonInput className='ion-margin-top' fill='outline' label='Password' labelPlacement='floating' placeholder='Enter text' type='password'/>
                            <IonButton type='button' expand='block' className='ion-margin-top'>
                                Create My Account
                                <IonIcon icon= {checkmarkCircleOutline} slot='end' />
                                        </IonButton>
                                            </form>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                
            </IonContent>
        </IonPage>
    );
};

export default Register;