import fetch from 'node-fetch';

const CovidCorona = ({data}) => {
  console.log(data);
  return(
    <>
      <h1>Get data covid</h1>
    </>
  )
}

export async function getStaticProps(){
  const response = await fetch(`https://api.covid19api.com/summary`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
  }
}

export default CovidCorona;