import Item from "../Item/Item"
import st from "./style.module.scss"

export default function Cards(props) {
    console.log(props)
    return(
        <div className={st.container}>
            {props.arr.map((item, index) =>(
                <Item></Item>
                ))}
        </div>
    );
}