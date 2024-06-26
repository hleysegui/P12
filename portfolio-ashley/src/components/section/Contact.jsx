import ContactForm from "../../ContactForm"

function Contact() {
    return (
        
        <section id="contact">
            <div className="container mt-3 contactContent">
                <h2 className="text-center">Contactez-moi</h2>
                <ContactForm />
                <div className="row">
                    <div className="col-lg-4 mt-4 contactColumn">
                        <i className="fa-solid fa-phone fa-4x"></i>
                        <h3>Téléphone</h3>
                        <p>06-59-54-35-24</p>
                    </div>
                    <div className="col-lg-4 mt-4 contactColumn">
                        <i className="fa-regular fa-envelope fa-4x"></i>
                        <h3>Adresse email</h3>
                        <p>ashley.segui@icloud.com</p>
                    </div>
                    <div className="col-lg-4 mt-4 contactColumn">
                        <i className="fa-brands fa-linkedin-in fa-4x"></i>
                        <h3>LinkedIn</h3>
                        <a href="http://www.linkedin.com/in/ashley-segui-lubin-595275121" target="_blank">Ashley SEGUI</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact