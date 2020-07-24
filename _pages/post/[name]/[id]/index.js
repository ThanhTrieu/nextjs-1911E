import { useRouter } from 'next/router'
import Link from 'next/link';
import MasterLayout from '../../../../components/master-layout';

const Post = () => {
  const router = useRouter()
  const { id, name, age } = router.query;
  //const age = router.query.age;
  // /post/[id]
  return(
    <>
      <MasterLayout
        title={`bai viet so - ${id}`}
      >
        <h1>Bai viet co id la {id}</h1>
        <h2> Ten bai biet {name}</h2>
        <p> Age : {age} </p>
      </MasterLayout>
    </>
  )
}
export default Post;