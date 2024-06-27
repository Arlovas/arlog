
type Props = {
    dateString: string;
    dateFormat: string;
};

interface DateFormatOptions {
    year: 'numeric';
    month: 'long';
    day: 'numeric';
}

function formatDate(dateString: string, dateFormat: string): string {
    const date = new Date(dateString);
    const options: DateFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Intl.DateTimeFormat(dateFormat, options).format(date);
}

const DateFormatter = ({ dateString, dateFormat }: Props) => {
    const formattedDate = formatDate(dateString, dateFormat);
    return <time dateTime={dateString}>{formattedDate}</time>;
};

export default DateFormatter;
