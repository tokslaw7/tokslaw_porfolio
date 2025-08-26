import image from "../../assets/images/sandycity.png";
import image1 from "../../assets/images/Duluth.png";
import image2 from "../../assets/images/alphacity.png";

export default function Project (){
    return(
        <div id="project">
            <h2> Some Projects</h2>
            <div className="card-deck">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Sandy Springs</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card">
                    <img src={image1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Duluth</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to
                                additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card">
                    <img src={image2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Alpharetta</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This card has even longer content than the first to show
                                that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
        </div>
    )
}