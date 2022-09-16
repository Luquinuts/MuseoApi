import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

function Horas () {
  return "10, 12, 14"
}

function Minutos () {
  return "0,15,30,45"
}

function Dias () {
  let horas;
  for (let i=0; i < 31; i++) {
    if (i % 5 == 0) {
      horas = horas + "," + i
    }
  }

  return horas
}

function Mes () {
  return "septiembre, octubre"
}


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tours</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tours</IonTitle>
          </IonToolbar>
        </IonHeader>
       

      <IonTitle> Tour Dates </IonTitle>
        <IonDatetime
      minuteValues={Minutos()}
      hourValues={Horas()}
      dayValues={Dias()}>
        
    </IonDatetime>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
