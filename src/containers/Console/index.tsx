import React, {useState} from 'react';
import TextArea from 'components/Textarea';
import { sendsay } from 'sendsay';
//css-modules

const Console = () => {
    const [ response, setResponse ] = useState('');
    const [ error, setError ] = useState(false)

    const handleTextArea = (e : any) => {
        try {
            sendsay.request(JSON.parse(e.target.value)).then((res : any) => {
                setResponse(JSON.stringify(res, null, 4).split(',').join(''));
                setError(false);
            }).catch( (err: any) => {
                console.log(err)
                setError(true);
            });
        } catch(err) {
            setError(true);
            console.log(err)
        }    
    }


    return (
        <>
            <TextArea onChange={handleTextArea} error={error}/>
            <TextArea disabled value={response}/>
        </>
    )
}

export default Console;