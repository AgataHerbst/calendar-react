import {useState} from 'react';

function InputDate(){
    const [generate, setGenerate] = useState();
    
    return <>
<div>
<span>Month:<input></input></span>
<span>Year:<input></input></span>
</div>
<div><button>Generate</button></div>
    </>
}
export default InputDate;