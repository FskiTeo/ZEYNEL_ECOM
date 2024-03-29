import {Link} from 'react-router-dom'


export default function ProductCard(props) {

    if (props.data !== undefined) {
        return (
            <div className="flex items-start max-w-xs rounded-lg border dark:border-gray-200 overflow-hidden mb-6">
                <Link className="flex-1" to={"/p/" + props.data.id}>
                    <img
                        alt={props.data.title}
                        className="object-cover w-full aspect-square"
                        src={JSON.parse(props.data.images)[0]}
                    />
                    <div className="p-4 relative md">
                        <div className="font-bold line-clamp-2">{props.data.title}</div>
                        <div className="text-2xl font-bold bottom-0">{props.data.price}€</div>
                    </div>
                </Link>
            </div>
        )
    }
}