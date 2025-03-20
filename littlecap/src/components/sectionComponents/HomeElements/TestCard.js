function TestCard(props) {
    return (
        <article className="testimonial-card">
            <img src={require('littlecap\src\assets\🦆 icon _eye_.svg')} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}
export default TestCard;