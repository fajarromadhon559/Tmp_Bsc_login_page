import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';

const List: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);

    // useIonViewWillEnter( async () => {
    //     const users =  await getUsers();
    //     setUsers(users);
    //     setLoading(false);
    // });

    const getUsers = async () => {
        const data = await fetch('https://randomuser.me/api?results=10');
        const users = await data.json();
        return users;
    };

    return (
        <IonPage>
            <IonHeader>
            <IonToolbar color={'dark'}>
                    <IonButtons slot='start'>
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                UI goes here...
            </IonContent>
        </IonPage>
    );
};

export default List;