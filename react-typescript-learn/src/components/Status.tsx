type statusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: statusProps) => {
    let message
    if(props.status === 'loading')
        message= 'Loading...'
    else if(props.status === 'success')
        message = 'Data Fetched Successfully'
    else if(props.status === 'error')
        message = 'Error Loading Data'
return (
    <div>
        <h2>Status - {message}</h2>
    </div>
)
}