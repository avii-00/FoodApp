import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function QuoteSection() {
    return(
        <div className="section quote">
            <p className="quote-text">< FontAwesomeIcon icon={faQuoteLeft}/>Most of us have fond memories of food from our childhood. Whether it was our mom's 
            homemade lasagna or a memorable chocolate birthday cake, food has a way of transporting us back to the past.</p>
            <p className="quote-author">-Homaro Cantu-</p>
        </div>
    )
}