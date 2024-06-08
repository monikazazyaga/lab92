import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import ProfileEditForm from './components/ProfileEditForm';

function App() {
  return (
    <div>
      <h1>Мои формы</h1>
      <h2>Форма Регистрации</h2>
      <RegistrationForm />
      <h2>Форма Редактирования профиля</h2>
      <ProfileEditForm />
    </div>
  );
}

export default App;
