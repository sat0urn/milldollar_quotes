import {pixelsData} from "../../data/pixelsData.js";

const PixelListPage = () => {

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
        {pixelsData.map(pixel => {
          const sizes = pixel.size.split('x')
          return (<tr key={pixel.id}>
            <th scope="row">{pixel.id}</th>
            <td>{pixel.title}</td>
            <td>{pixel.url}</td>
            <td>{pixel.size}</td>
            <td>{sizes[0] * sizes[1]} пикселей</td>
          </tr>)
        })}
        </tbody>
      </table>
    </div>
  )
}

export default PixelListPage