import style from "./header.module.css"
export function HeaderMain({
  setShowMenu,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className={style.MainHeader}>
      <div className={style.OptionMain}>
        <div>Мужчинам</div>
        <div>Женщинам</div>
        <div>Детям</div>
      </div>
      <div className={style.OptionMainMobile}>
        <div
          onClick={() => {
            setShowMenu((prev) => !prev)
          }}
        >
          <img src="./Group%2020.png" alt="img" />
        </div>
        <div>
          <img src="./Vector222.png" alt="img" />
        </div>
      </div>

      <div className={style.logoMain}>
        <img src="./image/mainIcon.png" alt="mainIcon" />
      </div>
      <div className={style.OptionMainSecond} style={{ fontSize: "0.5rem" }}>
        {/* <UiButton variant="mainSecond">
            <div className={style.Image}>
              <img src="/image/person.png" alt="person" />
              <span>ВОЙТИ</span>
            </div>
          </UiButton> */}
        <div className={`${style.ButtonMainSecond} ${style.visibleNone}`}>
          <div className={style.Image}>
            <img src="./image/person.png" alt="person" />
          </div>
          <span>ВОЙТИ</span>
        </div>
        <div className={style.ButtonMainSecond}>
          <div className={style.Image}>
            <img src="./image/star.png" alt="star" />
          </div>
          <span>ИЗБРАННОЕ</span>
        </div>
        <div className={style.ButtonMainSecond}>
          <div className={style.Image}>
            <img src="./image/shop.png" alt="shop" />
          </div>
          <span>КОРЗИНА</span>
        </div>
        <div className={`${style.ButtonMainSecond} ${style.visibleNone}`}>
          <div className={style.Image}>
            <img src="./image/search.png" alt="search" />
          </div>
          <span>ПОИСК</span>
        </div>
      </div>
    </div>
  )
}
