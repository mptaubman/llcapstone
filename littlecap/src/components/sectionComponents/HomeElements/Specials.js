import CarouselPage from './SpecialsCarousel';
import GreekSalad from '../../../assets/greek-salad.jpg';
import Bruschetta from '../../../assets/bruschetta.jpg';
import LemonDessert from '../../../assets/lemon-dessert.jpg';
import SpecialCard from './SpecialsCard';

function Specials(){
    return(
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" 
                href={require('../../../assets/Online_button.jpg')} 
                target="_blank" 
                rel="noreferrer">Order Online</a>
            </article>

            <section className="specials-card">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={Bruschetta} name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
            </section>

            <section>
                <CarouselPage />
            </section>
        </section>
    );
}

export default Specials;