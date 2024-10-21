export type profileProps = {
    name: string
}

export const Profile = ({name}: profileProps) => {
    return <div>Private Profile component. Name is {name}</div>
}