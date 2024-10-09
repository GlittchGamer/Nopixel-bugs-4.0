export const Input = (props: any) => {
    return (
        <div
            class="_textArea_6xu5n_1"
        >
            <div
                class="_header_6xu5n_10"
            >
                <div
                    class="_title_6xu5n_21"
                >
                    {props.title}
                </div>
                <div
                    class="_description_6xu5n_30"
                >
                    {props.description}
                </div>
            </div>
            <textarea
                class={`${props.smallHeight ? '_smallHeight_6xu5n_56' : ''}`}
                placeholder={props.description}
                onChange={e => props.onChange(e)}
            />
        </div>
    )
}