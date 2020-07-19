import { Input } from 'antd';
const { Search } = Input;

export default function InputSearch() {
  return(
    <>
      <Search 
        placeholder="input search text"
        onSearch={value => console.log(value)} 
        enterButton
      />
    </>
  )
}