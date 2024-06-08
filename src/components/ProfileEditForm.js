import React, { useState } from 'react';

const ProfileEditForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Имя обязательно.';
    }
    if (!surname) {
      errors.surname = 'Фамилия обязательна.';
    }
    if (!patronymic) {
      errors.patronymic = 'Отчество обязательно.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Действия при успешной валидации
      alert('Профиль успешно обновлен!');
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span>{errors.name}</span>}
        </label>
      </div>
      <div>
        <label>Фамилия:
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
          {errors.surname && <span>{errors.surname}</span>}
        </label>
      </div>
      <div>
        <label>Отчество:
          <input type="text" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
          {errors.patronymic && <span>{errors.patronymic}</span>}
        </label>
      </div>
      <div>
        <label>Дата рождения:
          <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        </label>
      </div>
      <div>
        <label>Адрес:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
      </div>
      <div>
        <button type="submit">Сохранить</button>
      </div>
    </form>
  );
};

export default ProfileEditForm;