import { Link } from 'react-router-dom'
import { useSearchParams, useParams } from 'react-router-dom'

const Article = () => {
  // const [ params ]= useSearchParams()
  // let id= params.get('id')
  // let name= params.get('name')
  // console.log(id, name, ":");

  const params = useParams()
  let id = params.id
  let name = params.name
  console.log(id,name, '========')

  return (
    <>
      <div>文章页{id}-{name}</div>
      <Link to="/login">跳转到登录页</Link>
    </>
  )
}

export default Article
