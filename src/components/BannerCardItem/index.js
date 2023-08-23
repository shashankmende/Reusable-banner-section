// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {item} = props
  const {headerText, description, className} = item
  return (
    <li className={className}>
      <div>
        <h1 className="headerCss">{headerText}</h1>
        <p>{description}</p>
        <button className="show_more_button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
