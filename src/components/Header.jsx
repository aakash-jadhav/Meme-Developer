import trollface from "../images/troll-face.png"
export default function Header() {
  return (
    <header className="header">
      <img src={trollface} className="header--image" />
      <h2 className="header--title">Meme Developer</h2>
      <h4 className="header--project">Generate Meme</h4>
    </header>
  )
}
