// eslint-disable-next-line no-unused-vars
import React from 'react';
import MyPic from '../assets/me.png';

const Hero = () => {
    // Typewriter Effect
    const TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        const that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        const elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-type');
            const period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
        document.body.appendChild(css);
    };

    return (
        <section className="container mx-auto my-16">
            <div className="flex justify-center items-center flex-col md:flex-row">
                {/* Text Content */}
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold mx-4 md:mx-20">
                        Turning Ideas Into Digital Experiences
                    </h1>
                    <div className="mt-4">
                        <h2 className="text-2xl md:text-4xl mx-4 md:mx-20 text-gray-500">
                            Hi, I’m <span className="font-bold">Rukshan</span>. I have experience in&nbsp; <br />
                            <a
                                href="#"
                                className="typewrite text-black border-r-4 border-black"
                                data-period="2000"
                                data-type='[ "Web Development", "React Development", "Java Development", "PHP Development" ]'
                            >
                                <span className="wrap"></span>
                            </a>
                        </h2>
                    </div>
                    {/* Call-to-Action Button */}
                    <div className="mt-8 mx-4 md:mx-20">
                        <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-black/70 transition duration-300">
                            Explore Now
                        </button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="mx-4 md:mx-10 mt-10 md:mt-0">
                    <img
                        className="max-w-96 h-auto"
                        src={MyPic}
                        alt="Rukshan"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
