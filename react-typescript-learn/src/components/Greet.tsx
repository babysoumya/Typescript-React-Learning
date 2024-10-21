type GreetType = {
    name:string
    messageCount?: number
    isLoggedIn: Boolean
}
export const Greet = (props: GreetType) => {
    const {messageCount = 0} = props
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome ${props.name} , you have ${messageCount} unread messages!`: `Welcome Guest`
                }
            </h2>
        </div>
    )
}