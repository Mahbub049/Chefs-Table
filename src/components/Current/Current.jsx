const Current = ({cooking, idx}) => {
    const {name, time, calories} = cooking;
    return (
        <tr className="bg-base-200">
            <td>{idx+1}</td>
            <td>{name}</td>
            <td>{time} minutes</td>
            <td>{calories} calories</td>
        </tr>
    );
};

export default Current;