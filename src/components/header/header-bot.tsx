import { useEffect } from "react"
import style from "./header.module.css"

export function HeaderBot({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}) {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden" // Отключаем прокрутку
    } else {
      document.body.style.overflow = "" // Восстанавливаем прокрутку
    }
    return () => {
      document.body.style.overflow = "" // Чистим стиль при размонтировании
    }
  }, [showMenu])
  return (
    <div
      onClick={() => {
        // e.preventDefault()
        setShowMenu(false)
      }}
      className={`${style.MainOptionHeader} ${showMenu ? style.showMenu : ""}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={`${style.containerMainOption} ${
          showMenu ? style.showMenu : ""
        }`}
      >
        <div>Новинки</div>
        <div>Сноуборд</div>
        <div>Лыжи</div>
        <div>Скейт</div>
        <div>Лонгборд</div>
        <div>Вейкборд</div>
        <div>Серф</div>
        <div>Sup</div>
        <div>Одежда</div>
        <div>Обувь</div>
        <div>Аксессуары</div>
        <div>Бренды</div>
        <div style={{ color: "red" }}>Распродажа</div>
      </div>
    </div>
  )
}
