import style from "./connect-user.module.scss"
export function ConnectUser() {
  return (
    <div className={style.wrapper}>
      <div className={style.block1}>
        <img src="/Rectangle%2012.png" alt="" />
        <div className={style.container}>
          <div>
            <img src="/image 23.png" alt="" />
          </div>
          <h3>Программа лояльности</h3>
          <div>Зарабатывайте баллы и получайте преимущества</div>
          <button>Вступайте в клуб</button>
        </div>
      </div>
      <div className={style.block2}>
        <img src="/Rectangle%2035.png" alt="" />
        <div className={style.container}>
          <div>
            <img src="/Vector.png" alt="" />
          </div>
          <h3>Скидка -10%</h3>
          <div>За подписку на наши новости</div>
          <div className={style.wrapperInput}>
            <input type="text" placeholder="Email" />
            <img src="/vect%20(1).png" alt="" className={style.email} />
            <button>
              <img src="/vect%20(2).png" alt="" className={style.send} />
            </button>
          </div>
          {/* <button></button> */}
        </div>
      </div>
    </div>
  )
}
