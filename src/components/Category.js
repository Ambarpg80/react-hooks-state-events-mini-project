import React , {useState} from 'react';

function Category({category}){
    const [clicked, setClicked] = useState(false)


  function handleClick(){
    setClicked(!clicked)
  }
    return(
    <button onClick ={handleClick}
            value={category} 
            className={clicked ? "selected" : "" }>
      {category}
    </button>
    )
}

export default Category