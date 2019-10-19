import React, { Fragment, useEffect, useContext } from "react"
import { AppContext } from "../App/App"

function Drum({ e: { id, src, letter, key } }) {
  const { setDrumAudio, Switch } = useContext(AppContext)
  let audioElement = null

  useEffect(() => {
    return () =>
      window.removeEventListener("keydown", playDrumSoundFromKeyboard)
  })

  function playDrumSound(elementId) {
    if (Switch) {
      audioElement = document.getElementById(elementId)
      setDrumAudio(audioElement.parentNode.id)
      audioElement.play()
    }
  }

  function playDrumSoundFromKeyboard(event) {
    if (Switch) {
      audioElement = document.getElementById(event.key.toUpperCase())
      if (!audioElement) return
      console.log(audioElement)
      setDrumAudio(audioElement.parentNode.id)
      audioElement.play()
    }
  }

  window.addEventListener("keydown", playDrumSoundFromKeyboard)

  return (
    <Fragment>
      <button
        className="drum-pad"
        id={id}
        onClick={e => playDrumSound(e.target.firstChild.id)}
      >
        <audio src={src} data-key={key} className="clip" id={letter}></audio>
        {letter}
      </button>
    </Fragment>
  )
}

export default Drum
