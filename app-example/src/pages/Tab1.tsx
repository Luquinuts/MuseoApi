import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonThumbnail, IonImg, 
  IonButton, IonAvatar, IonChip, IonLabel, IonIcon, IonMenu, IonItem, IonList, IonRouterOutlet, IonItemDivider, IonToggle} from '@ionic/react';
import React, { useState } from 'react';
import { closeCircle } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  type Item = {
    src: string;
    text: string;
  };
  const items: Item[] = [{ src: 'https://pixabay.com/photos/silver-wattle-acacia-dealbata-7442792/', text: 'A picture of a tree' }];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homescreen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Homescreen</IonTitle>
          </IonToolbar>
        </IonHeader>
        

      <IonCard>
      <IonCardHeader>
      <IonCardTitle>Museo TEC 2</IonCardTitle>
      <IonCardSubtitle>Welcome to the Museum of Crafts and Arts!</IonCardSubtitle>
      </IonCardHeader>
      </IonCard>


    <IonChip color="warning">
        <IonAvatar>
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </IonAvatar>
        <IonLabel>Avatar Chip</IonLabel>
        <IonIcon icon={closeCircle}></IonIcon>
      </IonChip>

    <IonButton>Default</IonButton> 

    
    <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={"https://i0.wp.com/moovemag.com/wp-content/uploads/2020/11/arte-clasicista.jpg?fit=700%2C524&ssl=1"}/>
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
 
    <IonItemDivider>Accecibilidad</IonItemDivider>
          <IonItem>
            <IonLabel>Opcion Por Voz</IonLabel>
            <IonToggle value="Opcion Por Voz" />
          </IonItem>

          <IonItem>
            <IonLabel>Opcion Vibracion</IonLabel>
            <IonToggle value="Opcion "/>
          </IonItem>

          <IonItem>
            <IonLabel>Opcion 3</IonLabel>
            <IonToggle value="mushrooms"/>
          </IonItem>

      </IonContent>
    </IonPage>
    );
};

export default Tab1;