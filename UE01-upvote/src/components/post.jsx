export default function Post( {seed} ) {
    return <>
        <article className="media">
            <figure className="media-left">
                <img className="image is-64x64" src={seed.submissionImage} />
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>
                            <a href="#" className="has-text-info"> {seed.title} </a>
                            <span className="tag is-small">#{seed.id}</span>
                        </strong>
                        <br />
                        {seed.description}
                        <br />
                        <small className="is-size-7">
                            Submitted by:
                            <img className="image is-24x24" src={seed.avatar} />
                        </small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <span className="icon is-small">
                    <i className="fa fa-chevron-up"></i>
                    <strong className="has-text-info"> {seed.votes} </strong>
                </span>
            </div>
        </article>
    </>
}