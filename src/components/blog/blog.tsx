import { useState, useEffect, useRef } from "react"
import { Play } from "../../svg/play"
import style from "./blog.module.scss"
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai"

export function Blog() {
  const [showBlogSlider, setShowBlogSlider] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const sliderRef = useRef<HTMLInputElement | null>(null)

  function goRight() {
    setShowBlogSlider((prev) => prev - sliderWidth)
  }
  // function goLeft() {
  //   setShowBlogSlider((prev) => prev + sliderWidth)
  // }
  function goLeft() {
    setShowBlogSlider(0)
  }

  useEffect(() => {
    const changeWidth = () => {
      setSliderWidth(
        sliderRef.current ? sliderRef.current.offsetWidth : sliderWidth
      )
    }
    changeWidth()
    window.addEventListener("resize", changeWidth)
    return () => window.addEventListener("resize", changeWidth)
  }, [sliderWidth])

  return (
    <div ref={sliderRef} className={style.slider}>
      <div
        className={style.windowBlog}
        style={{ transform: `translateX(${showBlogSlider}px)` }}
      >
        <div className={style.blog}>
          <div className={style.image}>
            <img src="/Rectangle.png" alt="image" />
            <Play className={style.playButton} />
          </div>
          <div className={style.text}>
            <div className={style.wrapper}>
              <div className={style.titleInfo}>
                <h3>Блоги</h3>
                <div>Все блоги</div>
              </div>
              <h2>Очень преочень длинное название блога</h2>
              <p>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому.{" "}
              </p>
              <p>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому...
              </p>
              <span className={style.read}>Читать продолжение</span>
            </div>

            <AiOutlineCaretRight
              onTouchStart={goRight}
              onClick={goRight}
              className={style.arrow2}
            />
          </div>
        </div>
        <div className={style.blog}>
          <div className={style.image}>
            <img src="/image33.jpg" alt="image" />
            <Play className={style.playButton} />
            <AiOutlineCaretLeft
              onTouchStart={goLeft}
              onClick={goLeft}
              className={style.arrow1}
            />
          </div>
          <div className={style.text}>
            <div className={style.wrapper}>
              <div className={style.titleInfo}>
                <h3>Блоги</h3>
                <div>Все блоги</div>
              </div>
              <h2>Очень преочень длинное название блога</h2>
              <p>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому.{" "}
              </p>
              <p>
                Меня не спрашивали, а надо было спросить, что означает имя
                Заратустры именно в моих устах — в устах первого имморалиста:
                ведь то, в чём состоит неслыханная уникальность этого перса в
                истории, являет собою противоположность как раз этому...
              </p>
              <span className={style.read}>Читать продолжение</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
