import MasterLayout from '../../components/master-layout';
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <MasterLayout title="This is home page">
        <h1>This is home page - id = {id}</h1>
      </MasterLayout>
      
    </>
  )
}
export default Home;