import { useEffect, useState } from "react"
import { UiCarousel } from "../../ui/ui-carousel/carousel"
import { UiModal } from "../../ui/ui-modal/modal"

import style from "./slider-main.module.css"

export type Images = {
  lowQualitySrc: string
  highQualitySrc: string
  text: string
}

export function SliderMain({ images }: { images: Images[] }) {
  const [modalActive, setModalActive] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null)
  const [selectedText, setSelectedText] = useState("")

  const closeModal = () => {
    setSelectedImage(null)
    setModalActive(false)
  }

  useEffect(() => {
    const handleBodyScroll = () => {
      if (modalActive && selectedImage) {
        document.body.style.overflowY = "hidden"
        setModalImageUrl(selectedImage)
      } else {
        document.body.style.overflowY = "auto"
      }
    }
    handleBodyScroll()
    return () => {
      document.body.style.overflowY = "auto"
      setModalImageUrl(null)
    }
  }, [modalActive, selectedImage])

  return (
    <div className={style.face}>
      <UiCarousel
        images={images}
        modalActive={modalActive}
        setModalActive={setModalActive}
        setSelectedImage={setSelectedImage}
        setSelectedText={setSelectedText}
      />

      <UiModal
        imageUrl={modalImageUrl}
        onClose={closeModal}
        modalActive={modalActive}
        text={selectedText}
      />
    </div>
  )
}
