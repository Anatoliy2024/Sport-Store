import style from "./footer.module.scss"
export function Footer() {
  return (
    <>
      <div>
        <img src="./footer/Rectangle.png" alt="image" />
      </div>
      <div className={style.wrapper}>
        <div className={style.title}>
          <div className={style.logo}>
            <img src="./footer/image%2027.png" alt="img" />
            <div>boardriders</div>
          </div>
          <div className={style.input}>
            <input
              type="text"
              placeholder="Подпишись на рассылку и получи  -10%  скидку"
            />
            <img src="./footer/Vector.png" alt="" />
            <button>
              <img src="./footer/Vector%20(1).png" alt="img" />
            </button>
          </div>
        </div>
        <div className={style.main}>
          <div className={style.mobil}>
            <div className={style.titleBlock}>
              Доступ к ранним релизам в приложении{" "}
            </div>
            <div className={style.mobilContent}>
              <div className={style.mobilWrapper}>
                <div className={style.mobilStore}>
                  <img src="./footer/Group%2042.png" alt="logo" />
                  <div className={style.mobilStoreText}>
                    <div>Download on the</div>
                    <div>App Store</div>
                  </div>
                </div>
                <div className={style.mobilStore}>
                  <img src="./footer/Group%201030.png" alt="img" />
                  <div className={style.mobilStoreText}>
                    <div>Get it on</div>
                    <div>Google Play</div>
                  </div>
                </div>
              </div>
              <div>
                <img src="./footer/Group%201035.png" alt="img" />
              </div>
            </div>
          </div>
          <div className={style.contact}>
            <div className={style.titleBlock}>Контакты</div>
            <div className={style.textContainer}>
              <div className={style.phonNumber}>
                <div>
                  <img src="./footer/Vector%20(2).png" alt="img" />
                </div>
                <div className={style.contactText}>
                  <div>8 (800) 511-74-68</div>
                  <div>
                    <p>Бесплатная горячая линия</p>
                    <p>Eжедневно с 9 до 21</p>{" "}
                  </div>
                </div>
              </div>
              <div className={style.email}>
                <div>
                  <img src="./footer/Vector%20(3).png" alt="img" />
                </div>
                <div className={style.contactText}>
                  <div>Контактный Email</div>
                  <div>info@brd.ru</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.help}>
            <div className={style.titleBlock}>Помощь</div>
            <ul className={style.сontentBlock}>
              <li>
                <a href="#">Доставка</a>
              </li>
              <li>
                <a href="#">Оплата</a>
              </li>
              <li>
                <a href="#">Возврат</a>
              </li>
              <li>
                <a href="#">Отзывы (2290)</a>
              </li>
              <li>
                <a href="#">Акции и скидки</a>
              </li>
            </ul>
          </div>
          <div className={style.company}>
            <div className={style.titleBlock}>Компания</div>
            <ul className={style.сontentBlock}>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Кодекс</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
              <li>
                <a href="#">Публичная офёрта</a>
              </li>
            </ul>
          </div>
          <div className={style.inc}>
            <div className={style.titleBlock}>Boardriders Inc.</div>
            <ul className={style.сontentBlock}>
              <li>
                <a href="#">Франчайзинг</a>
              </li>
              <li>
                <a href="#">Quiksilver</a>
              </li>
              <li>
                <a href="#">Roxy</a>
              </li>
              <li>
                <a href="#">DS Shoes</a>
              </li>
              <li>
                <a href="#">Boardriders Club</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer}>
          <ul className={style.socialMedia}>
            <li>
              <a href="#">
                <img src="./footer/twitter%20-%20FontAwesome.png" alt="img" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="./footer/facebook-official%20-%20FontAwesome.png"
                  alt="img"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./footer/twitch%20-%20FontAwesome.png" alt="img" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="./footer/youtube-play%20-%20FontAwesome.png"
                  alt="img"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./footer/instagram%20-%20FontAwesome.png" alt="img" />
              </a>
            </li>
          </ul>
          <div className={style.ps}>
            &#9400; 2025 Brd.ru. Все права защищены
          </div>
        </div>
      </div>
    </>
  )
}
