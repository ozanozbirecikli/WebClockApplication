import React from 'react';
import '../Styles/homeStyles.css'
const Footer = () => {
    return (
        <div >
            <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <div class="row">
                    
                    <div class="col-6 col-md">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Team</h5>
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://www.linkedin.com/in/ozan-%C3%B6zbirecikli-7769b577/">Ozan Özbirecikli</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://www.linkedin.com/in/onur-eker-aaa67b1a6/">Onur Eker</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://www.linkedin.com/in/utkuozbudak/">Utku Özbudak</a></li>
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="https://www.linkedin.com/in/batuhansesli/">Batuhan Sesli</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;