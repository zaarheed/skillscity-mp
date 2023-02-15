export default function Input(props) {
    const handleChange = (event) => {
        const value = event.target.value;
        props.onChange(value);
    }

    return (
        <input
            {...props}
            className="bg-gray-200 py-3 px-6 w-full rounded"
            onChange={handleChange}
        />
    )
}