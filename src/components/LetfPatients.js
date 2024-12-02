import React from 'react';
import '../Styles/leftpatients.css';

const patientData = {
  name: 'Jessica Taylor',
  age: 26,
  gender: 'Female',
  imgurl: '../assets/Layer 2',
};

function LeftPatients() {
  const patientCards = [];
  for (let i = 0; i < 12; i++) {
    patientCards.push(
      <div className="patient-card" key={i}>
        <div
          className="profile-img"
         
        ></div>
        <div className="patient-name">{patientData.name}</div>
        <div className="patient-gender">
          {patientData.gender}, {patientData.age}
        </div>
        <div className="hor-options"></div>
      </div>
    );
  }

  return (
    <div className="left-container">
      <div className="title-head">Patients</div>
      <div className="search-icon"></div>
      <div className="patient-item">
        {patientCards}
      </div>
    </div>
  );
}

export default LeftPatients;
