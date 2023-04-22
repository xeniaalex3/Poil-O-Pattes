import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../../actions/dogsList';
import { fetchUsers } from '../../actions/usersList';
import { fetchAppointement } from '../../actions/appointementList';

import UserProfile from './UserProfile';
import DogProfile from './DogProfile';
import AppointementProfile from './AppointementProfile';
import './style.scss';

function Profile() {
  const dogs = useSelector((state) => state.dogsList.list);
  const users = useSelector((state) => state.usersList.list);
  const appointements = useSelector((state) => state.appointementList.list);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(fetchUsers());
    dispatch(fetchAppointement());
  }, []);

  //console.log(users);
  return (
    <>
      <h1 className="profile-h1">Mon profil</h1>
      <div className="profile">
        <div className="profile-box">
          <h2 className="profile-title">Le propriétaire</h2>
          <UserProfile
            key={users.id}
            name={users.name}
            email={users.email}
          />
        </div>
        <div className="profile-box">
          <h2 className="profile-title">Mes animaux</h2>
        
          {dogs.map((dog) => (
            <DogProfile
              key={dog.id}
              animalName={dog.title.rendered}
              dogBreed={dog.breed.length === 0 ? 'Non renseignée' : dog._embedded['wp:term'][0][0].name}
              age={dog.age.length === 0 ? 'Non renseigné' : dog._embedded['wp:term'][2][0].name}
              weight={dog.weight.length === 0 ? 'Non renseigné' : `${dog._embedded['wp:term'][1][0].name} kg `}
            />
          ))}
          <Link to="/ajouter-un-animal" className="profile-button--label">Ajouter un animal</Link>
        </div>
        <div className="profile-box">
          <h2 className="profile-title">Mes Rendez-vous</h2>
     
          {appointements.map((appointement) => (
            <AppointementProfile
              key={appointement.day}
              dates={appointement.day.split('-').reverse().join('-')}
              times={appointement.start_time.split(':').slice(0, 2).join('h')}
              dogName={appointement.dog_name}
            />
          ))}
          <Link to="/prendre-rendez-vous" className="profile-button--label">Ajouter un rendez-vous</Link>
        </div>
      </div>
      <div className="account-button">
        <button type="submit" className="account-button-delete">Supprimer mon compte</button>
      </div>
    </>

  );
}

export default Profile;
