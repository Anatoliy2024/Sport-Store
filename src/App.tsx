import { useState } from "react"
import style from "./App.module.css"
import { ActionsCompany } from "./components/actionsCompany/actions-company"
// import { Header } from "./components/header/header"
import { HeaderBot } from "./components/header/header-bot"
import { HeaderMain } from "./components/header/header-main"
import { HeaderTop } from "./components/header/header-top"
import { LogoPartner } from "./components/logoPartner/logo-partner"
import { NewBoard } from "./components/newBoard/new-board"
import { SliderMain } from "./components/sliderMain/slider-main"
import { ActionOption } from "./components/actionOption/action-option"
import { Blog } from "./components/blog/blog"
import { ConnectUser } from "./components/connectUser/connect-user"
import { Footer } from "./components/footer/footer"

const images = [
  {
    lowQualitySrc: "/img%20(1).jpg",
    highQualitySrc: "/img%20(1)%20big.png",
    text: "Волна",
  },
  {
    lowQualitySrc: "/img%20(2).jpg",
    highQualitySrc: "/img%20(2)%20big.png",
    text: "Сноубордист",
  },
  {
    lowQualitySrc: "/img%20(3).jpg",
    highQualitySrc: "/img%20(3)%20big.png",
    text: "Сноуборд",
  },
  {
    lowQualitySrc: "/img%20(1).jpg",
    highQualitySrc: "/img%20(1)%20big.png",
    text: "Волна",
  },
  {
    lowQualitySrc: "/img%20(2).jpg",
    highQualitySrc: "/img%20(2)%20big.png",
    text: "Сноубордист",
  },
  {
    lowQualitySrc: "/img%20(3).jpg",
    highQualitySrc: "/img%20(3)%20big.png",
    text: "Сноуборд",
  },
]

const product = [
  {
    img: "/image%209.png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },
  {
    img: "/image%209%20(1).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 50,
    prise: 34392,

    star: true,
  },
  {
    img: "/image%209%20(2).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },
  {
    img: "/image%209%20(3).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },
  {
    img: "/image%209.png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },
  {
    img: "/image%209%20(1).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 50,
    prise: 34392,

    star: false,
  },
  {
    img: "/image%209%20(2).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },
  {
    img: "/image%209%20(3).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: true,
  },
]
const product2 = [
  {
    img: "/image%209%20(3).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: true,
  },
  {
    img: "/boots.png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 50,
    prise: 34392,

    star: true,
  },
  {
    img: "/image%209%20(2).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },

  {
    img: "/image%209.png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },
  {
    img: "/image%209%20(2).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },
  {
    img: "/image%209%20(3).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 0,
    prise: 34392,

    star: false,
  },
  {
    img: "/boots.png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 50,
    prise: 34392,

    star: true,
  },
  {
    img: "/image%209%20(1).png",
    label: "LIB TECH",
    category: "Мужской Сноуборд",
    discount: 50,
    prise: 34392,

    star: false,
  },
]

function App() {
  const [productState, setProductState] = useState<NewBoard[]>(product)
  const [productState2, setProductState2] = useState<NewBoard[]>(product2)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className={style.Container}>
      <div className={`${style.Section} ${style.HeaderBlack}`}>
        <HeaderTop />
      </div>
      <div className={style.Section}>
        <HeaderMain setShowMenu={setShowMenu} />
      </div>
      <div className={`${style.Section} ${style.HeaderGrey}`}>
        <HeaderBot showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      {/* <div className={style.Section}> */}
      <SliderMain images={images} />
      {/* </div> */}
      <div className={style.Section}>
        <LogoPartner />
      </div>
      <div className={style.Section}>
        <ActionsCompany />
      </div>
      <div className={style.Section}>
        <h3 className={style.title}>Новинки</h3>
        <NewBoard
          productState={productState}
          setProductState={setProductState}
        />
      </div>
      <div className={style.Section}>
        <ActionOption />
      </div>
      <div className={style.Section}>
        <h3 className={style.title}>DC Shoes популярное в коллекции</h3>
        <NewBoard
          productState={productState2}
          setProductState={setProductState2}
        />
      </div>
      <Blog />
      <div className={style.Section}>
        <ConnectUser />
      </div>

      <Footer />
    </div>
  )
}

export default App
