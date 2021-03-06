import React from "react";
import { Map, Marker, TileLayer} from "react-leaflet";
import L from "leaflet";
import { useHistory } from "react-router-dom";

import { FiArrowLeft, FiPlus }from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/create-orphanage.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function OprhanagesMap(){
  const { goBack } = useHistory();

  return(
    <div id="page-create-orphanage">
      <aside>
        <img src={mapMarkerImg} alt="Happy"/>

        <footer>
          <button type="button" onClick={goBack}/>
            <FiArrowLeft size={24} color="#FFF" />
        </footer>
      </aside>

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-20.4665705, -45.4343982]}
              style={{ width: '100%', height: 280}}
              zoom={15}
            >
              <TileLayer
                url={`'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'`}
              />

              <Marker interactive={false} icon={happyMapIcon} position={[-20.4665705, -45.4343982]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre</label>
              <input id="name" maxLength={380} />
            </div>

            <div className="input-block"></div>
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div id="input-block">
              <label htmlFor="instructions"></label>
              <textarea id="instructions"/>
            </div>

            <div id="input-block">
              <label htmlFor="opening_hours"></label>
              <textarea id="opening_hours"/>
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends"> Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>


          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}