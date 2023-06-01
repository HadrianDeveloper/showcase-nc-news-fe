import s from '../css/Upload.module.css';
import { useState } from "react";


export default function Upload() {

    const [upload, setUpload] = useState();

    function handleUpload(e) {
        if (e.target.files && e.target.files.length > 0) {
            setUpload(e.target.files[0])
        }
    };

    return (
        <div className={s.container}>

            {!upload && (
                <input 
                accept='image/*'
                type='file'
                onChange={handleUpload}
                />
            )}
           
            {upload && (
                <div className={s.preview}>
                    <img 
                        src={URL.createObjectURL(upload)}
                        className={s.uploaded}
                        alt='your uploaded image'
                    />
                    <button className={s.delete} onClick={() => setUpload()}>Remove</button>
                </div>
            )}
        </div>
    )
};