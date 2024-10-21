import { Personprops } from "./Person.types"
export const Person = (props: Personprops) => {
    return <div> {props.name.fname} {props.name.lname} </div>
}