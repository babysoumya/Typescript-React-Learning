
/** position 9 positions left-center, left-top, left-bottom, center, center
 * top, center bottom ...
  */

type horizontalPosition = 'left'| 'center' | 'right'
type verticalPosition = 'top' | 'center' | 'bottom'

type ToastProps= {
    position: Exclude<`${horizontalPosition}-${verticalPosition}`, 'center-center'> | 'center'
}
export const Toast = ({position}: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}