import React from 'react';
import s from './News.module.css';

const News = () => {
    return (
       <div className = {s.news}>
           Новости
           <button>Скачать всё</button>
       </div>
    );
}
export default News;