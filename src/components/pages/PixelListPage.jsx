import {pixelsData} from "../../data/pixelsData.js";

const PixelListPage = () => {

  const sortedPixels = pixelsData.sort((a, b) => {
    const pixelA = a.size.w * a.size.h
    const pixelB = b.size.w * b.size.h

    return pixelB - pixelA
  })

  return (
    <div className={"p-4"}>
      <h4 className={"fw-semibold text-center"}>Список всех изображении на главной канве</h4>
      <table className={"table"}>
        <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Тема</th>
          <th scope="col">Ссылка</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол. пикселей</th>
        </tr>
        </thead>
        <tbody>
        {sortedPixels.map((pixel, index) => {
          return (<tr key={pixel.id}>
            <th scope="row">{index + 1}</th>
            <td>{pixel.title}</td>
            <td>{pixel.url}</td>
            <td>{pixel.size.w}x{pixel.size.h}</td>
            <td>{pixel.size.w * pixel.size.h} пикселей</td>
          </tr>)
        })}
        </tbody>
      </table>
    </div>
  )
}

export default PixelListPage