import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';
import { homeOutline, logOutOutline, newspaperOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
    const paths = [
            {name : 'Home', url: '/app/list', icon: homeOutline },
            {name : 'Settings', url: '/app/settings', icon: newspaperOutline }
    ];

    return (
        <IonPage>
            <IonMenu contentId='main'>
                <IonHeader >
                    <IonToolbar color={'secondary'}>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {paths.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection='none'>
                                <IonIcon slot='start' icon={item.icon}/>
                            {item.name}
                        </IonItem>
                        </IonMenuToggle>
                    ))}
                    <IonMenuToggle>
                            <IonButton expand='full' routerLink="/" routerDirection='root'>
                                <IonIcon slot='start' icon={logOutOutline}/>
                            LogOut
                        </IonButton>
                        </IonMenuToggle>
                </IonContent>
            </IonMenu>

            <IonRouterOutlet id='main'>
                <Route exact path="/app/list" component={List}/>
                <Route path="/app/settings" component={Settings}/>
                <Route exact path="/app">
                    <Redirect to="/app/list"/>
                </Route>
            </IonRouterOutlet>
        </IonPage>
    );
};

export default Menu;