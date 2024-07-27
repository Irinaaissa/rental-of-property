import LinesEllipsis from 'react-lines-ellipsis'
export default function EllipsisText({ text, maxLines = 1, className }) {
    return (
        <div>
            <LinesEllipsis
             text={text}
             maxLine={maxLines}
             ellipsis="..."
             trimRight
             basedOn="letters"
             component="p"
             className={className}
            />
        </div>
    )

}