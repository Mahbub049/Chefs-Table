const Cook = ({cook, idx, removeCook}) => {
    const {id, name, time, calories} = cook;
    return (
            <tr className="bg-base-200">
                <td>{idx+1}</td>
                <td>{name}</td>
                <td>{time} minutes</td>
                <td>{calories} calories</td>
                <button onClick={()=>removeCook(cook)} className="btn font-medium rounded-full px-6 bg-[#0BE58A]">Want to Cook</button>
            </tr>
    );
};

export default Cook;