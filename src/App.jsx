import {useState} from 'react'
import QRCode from "react-qr-code";
import './App.css'


function App() {
    const [url, setUrl] = useState("http://localhost:8080");


    return (
        <>
            <div className="card">
                <input type={"url"} placeholder={"URL"} onChange={(e) => setUrl(e.target.value)}
                className="w-100"/>
                <p className=" my-3 ">
                    Ajoutez le lien et appuyez sur "générer"
                </p>
                <QRCode
                    id="qrcode"
                    className='rounded-lg py-3'
                    value={url}
                        size={256}
                        style={{height: "auto", maxWidth: "100%", width: "100%"}} viewBox={`0 0 256 256`}
                />

                { /* <button onClick={downloadQRCode} className='p-3 px-4 rounded-4xl cursor-pointer'> Download QR CODE </button> */}

            </div>
        </>
    )
}

export default App
