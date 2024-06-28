import DateFormatter from "./date-formatter";

type Props = {
    name: string;
    picture: string;
    date: string;
    dateFormat: string;
};

const Avatar = ({ name, picture, date, dateFormat }: Props) => {
    return (
        <div className="flex items-center">
            <img src={picture} className="w-20 h-20 rounded-full mr-4" alt={name} />
            <div>
                <div className="text-xl font-bold">{name}</div>
                {date ? <DateFormatter dateString={date} dateFormat={dateFormat} /> : null}
            </div>
        </div>
    );
};

export default Avatar;
