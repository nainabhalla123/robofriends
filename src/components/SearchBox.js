import React from 'react';


const SearchBox=({searchfield,searchChange})=>{
	return(
		<div className='pa2'>
		<input className= 'bg-lightest-blue br4 ba b--green pa3  '
		 type='search'
		  placeholder ='search robot here'
		 onChange={searchChange}
		 />
		 </div>

		);
}

export default SearchBox;