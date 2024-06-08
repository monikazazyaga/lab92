import React, { useState } from 'react';

const RegistrationForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!login || login.length < 6 || login.length > 20 || !/^[a-zA-Z0-9]+$/.test(login)) {
      errors.login = 'Логин должен содержать от 6 до 20 символов из латинского алфавита и цифры.';
    }
    if (!password) {
      errors.password = 'Пароль обязателен.';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert('Форма успешно отправлена!');
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Логин:
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
          {errors.login && <span>{errors.login}</span>}
        </label>
      </div>
      <div>
        <label>Пароль:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span>{errors.password}</span>}
        </label>
      </div>
      <div>
        <label>Повторите пароль:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </label>
      </div>
      <div>
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};

export default RegistrationForm;