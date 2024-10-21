type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}
/** <T extends string | number> */
export const List = <T extends {id: number}>({items, onClick}: ListProps<T>) => {
return (
    <div>
        <h2>List of items</h2>
        {items.map((item, index) => {
            return (
                <div key={item.id} onClick={()=>onClick(item)}>{JSON.stringify(item)}</div>
            )
        })
        }
    </div>
)
} 