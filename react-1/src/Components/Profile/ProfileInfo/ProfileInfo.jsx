import React, { Component } from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.fotka__img} src="https://drasler.ru/wp-content/uploads/2019/05/HD-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-1366%D1%85768-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-3.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
