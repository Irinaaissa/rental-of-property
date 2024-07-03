
export default function Card({
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews
  }) {
    return (
      <div className={CSS.card}>
        <h2>{name}</h2>
        <p>Цена: {price}</p>
        <p>Рейтинг: {rating}</p>
        <p>Местоположение: {location}</p>
        <ul>
          <li>Взрослые: {adults}</li>
          <li>Дети: {children}</li>
          <li>Двигатель: {engine}</li>
          <li>Коробка передач: {transmission}</li>
          <li>Форма: {form}</li>
          <li>Длина: {length}</li>
          <li>Ширина: {width}</li>
          <li>Высота: {height}</li>
          <li>Объем бака: {tank}</li>
          <li>Расход топлива: {consumption}</li>
        </ul>
        <h3>Описание</h3>
        <p>{description}</p>
        <h3>Детали</h3>


        
      </div>
    );
  }
  