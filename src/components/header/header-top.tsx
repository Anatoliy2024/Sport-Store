import style from "./header.module.css"

export function HeaderTop() {
  return (
    <div className={style.Delivery}>
      <div className={style.DeliveryOption}>
        <div className={style.ButtonPlace}>
          <div className={style.Image}>
            <img src="/image/place.png" alt="place" />
          </div>
          <span>Ваш регион доставки:Москва</span>
          <div className={style.Image}>
            <img src="/image/arrow.png" alt="arrow" />
          </div>
        </div>
        <div>Магазин</div>
        <div>Помощь</div>
        <div>Блоги</div>
      </div>
      <div className={style.OtherOptionDelivery}>
        <div className={style.DeliveryButton}>
          <div className={style.Image}>
            <img src="/image/car.png" alt="car" />
          </div>
          <span>Бесплатная доставка*</span>
        </div>
        <div className={style.DeliveryButton}>
          <div className={style.Image}>
            <img src="/image/card.png" alt="card" />
          </div>
          <span>Оплата при получении</span>
        </div>
        <div className={style.DeliveryButton}>
          <div className={style.Image}>
            <img src="/image/return.png" alt="return" />
          </div>
          <span>Возврат в течении 14 дней</span>
        </div>
      </div>
    </div>
  )
}
