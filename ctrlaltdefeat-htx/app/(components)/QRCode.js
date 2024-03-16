import { useEffect, useRef } from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ url }) => {
    const qrRef = useRef(null);

    useEffect(() => {
        if (qrRef.current) {
            // You can perform any additional actions after the component mounts
        }
    }, []);

    return (
        <div>
            <QRCode value={url} ref={qrRef} />
            <p>{url}</p>
        </div>
    );
};

export default QRCodeComponent;