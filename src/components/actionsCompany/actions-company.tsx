import style from "./actions-company.module.scss"
export function ActionsCompany() {
  return (
    <div className={style.Wrapper}>
      <div className={style.WrapperCard}>
        <div className={style.WrapperImg}>
          <img src="/board%201.png" alt="actions" />
        </div>
        <div className={style.Text}>название акции №1</div>
      </div>
      <div className={style.WrapperCard}>
        <div className={style.WrapperImg}>
          <img src="/board%202.jpg" alt="actions" />
        </div>
        <div className={style.Text}>название акции №2</div>
      </div>
    </div>
  )
}
