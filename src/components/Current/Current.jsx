const Current = ({cooking}) => {
    const {name, time, calories} = cooking;
    return (
        <tr className="bg-base-200">
            <td>1</td>
            <td>{name}</td>
            <td>{time}</td>
            <td>{calories}</td>
        </tr>
    );
};

export default Current;