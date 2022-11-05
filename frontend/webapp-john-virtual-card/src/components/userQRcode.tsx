import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import React from "react";
import styles from "../../styles/UserForm.module.css"

export default function UserQR(props: any)
{
    // function qrDownload():Function {
    const qrDownload = () => {
        const svg:any = document.getElementById("QRcode")
        const svgData = new XMLSerializer().serializeToString(svg)
        const canvas = document.createElement("canvas")
        const ctx:any = canvas.getContext("2d")
        const img = new Image()
        img.onload = () => {
            canvas.width = img.width + 20
            canvas.height = img.height + 20
            ctx.drawImage(img, 10, 10)
            const pngFile = canvas.toDataURL("image/png")
            const downloadLink = document.createElement("a")
            downloadLink.download = "QRcode"
            downloadLink.href = `${pngFile}`
            downloadLink.click()
        }
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
    }
    return (
        <div className={styles.userQR}>
            <h3>
                {props.name}<br/>
            </h3>
            <h6>
                {props.profile}<br/>
            </h6>
            <QRCodeSVG includeMargin size={256} id="QRcode" value={props.profile}/>
            <button onClick={qrDownload}>Download</button>
        </div>
    )
}