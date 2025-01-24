import style from "./action-option.module.scss"
export function ActionOption() {
  return (
    <div className={style.wrapper}>
      <div>
        <img src="/Rectangle%2019.png" alt="img" />
      </div>
      <h3>Название Акции</h3>
      <div className={style.text}>
        Меня не спрашивали, а надо было спросить, что означает имя Заратустры
        именно в моих устах — в устах первого имморалиста: ведь то, в чём
        состоит неслыханная уникальность этого перса в истории, являет собою
        противоположность как раз этому.
      </div>
    </div>
  )
}
