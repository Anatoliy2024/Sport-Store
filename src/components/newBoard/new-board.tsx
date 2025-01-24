import { UiCarouselProduct } from "../../ui/ui-carouselProduct/carousel-product"
import style from "./new-board.module.scss"
export type NewBoard = {
  img: string
  label: string
  category: string
  discount: number
  prise: number

  star: boolean
}

export function NewBoard({
  productState,
  setProductState,
}: {
  productState: NewBoard[]
  setProductState: React.Dispatch<React.SetStateAction<NewBoard[]>>
}) {
  return (
    <div className={style.Container}>
      <UiCarouselProduct
        products={productState}
        setProductState={setProductState}
      />

      <div className={style.Button}>Показать больше</div>
    </div>
  )
}
