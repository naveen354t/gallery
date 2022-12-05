import './index.css'

const ThumbnailItem = props => {
  const {thumbnailImagesList, updateThumbnailId, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = thumbnailImagesList

  const onChangeThumbnailId = () => {
    updateThumbnailId(id)
  }

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        onClick={onChangeThumbnailId}
        className="thumbnail-btn"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
