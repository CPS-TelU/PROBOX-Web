import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const HeroOurTeam = () => {
  return (
    <div className="flex flex-col justify-center space-y-8 py-10">
      <div className="flex flex-col space-y-12 items-center">
        <h2 className="text-3xl font-jakarta font-extrabold sm:text-4xl">
          EMBEDDED
        </h2>
        <div className="hidden lg:block">
          <div className="flex flex-row justify-between items-center space-x-44">
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Hazman.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Hazman Wirayudha
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block pt-4">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hazman-wirayudha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/hazmanwryd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Ghina.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-jakarta font-extrabold">
                  Ghina Mufidah
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block pt-4">
                    <a
                      href="https://www.instagram.com/ghiinamf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ghn-mf-1707ghn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/ghinamf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Aul.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Aulia Aushaf A
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block pt-4">
                    <a
                      href="https://www.instagram.com/aulia.aushff/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/awlllll/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex flex-col items-center">
          <div className="w-64 carousel rounded-box shadow-2xl md:w-6/12">
            <div className="carousel-item w-full">
              <div className="card bg-base-100 ">
                <figure>
                  <img
                    src="./Hazman.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Hazman Wirayudha
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block pt-4">
                      <a
                        href="https://www.instagram.com/hazman_0104/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hazman-wirayudha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/hazmanwryd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="card bg-base-100">
                <figure>
                  <img
                    src="./Ghina.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Ghina Mufidah
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block pt-4">
                      <a
                        href="https://www.instagram.com/ghiinamf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ghn-mf-1707ghn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/ghinamf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="card bg-base-100">
                <figure>
                  <img
                    src="./Aul.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Aulia Aushaf A
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block pt-4">
                      <a
                        href="https://www.instagram.com/aulia.aushff/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/auliaaushff/"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/awlllll"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-12 items-center">
        <h2 className="text-3xl font-jakarta font-extrabold sm:text-4xl">
          PROTOCOL
        </h2>
        <div className="hidden lg:block">
          <div className="flex flex-row justify-center items-center space-x-44">
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Adam.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Adam Wisnu P
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block pt-4">
                    <a
                      href="https://www.instagram.com/adam_wisnup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/adamwisnup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/adamwisnup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Hari.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Hari Iskandar
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block pt-4">
                    <a
                      href="https://www.instagram.com/hiskandaryapis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hskndr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/hiskandaryps/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Hoka.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Hoka Cristian S
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block pt-4">
                    <a
                      href="https://www.instagram.com/hoka.csa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hoka-cristian-7620851b0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/hokacristian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex flex-col items-center">
          <div className="w-64 carousel rounded-box shadow-2xl md:w-6/12">
            <div className="carousel-item w-full">
              <div className="card bg-base-100 ">
                <figure>
                  <img
                    src="./Adam.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Adam Wisnu P
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block pt-4">
                      <a
                        href="https://www.instagram.com/adam_wisnup/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/adamwisnup/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/adamwisnup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="card bg-base-100">
                <figure>
                  <img
                    src="./Hari.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Hari Iskandar
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block pt-4">
                      <a
                        href="https://www.instagram.com/hiskandaryapis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hskndr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/hiskandaryps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="card bg-base-100">
                <figure>
                  <img
                    src="./Hoka.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Hoka Cristian S
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block pt-4">
                      <a
                        href="https://www.instagram.com/hoka.csa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hoka-cristian-7620851b0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/hokacristian"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-12 items-center">
        <div className="flex text-3xl font-jakarta font-extrabold space-x-2 sm:text-4xl">
          <h2 className="text-primary">WEB</h2>
          <h2 className="">DEVELOPMENT</h2>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-row justify-center items-center space-x-44">
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Fatih.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Muhardian Fathih
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block">
                    <a
                      href="https://www.instagram.com/muhardianf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhardian-fathih-b60a68288/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/muhardiann"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Raihan.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Raihan Putra D
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block">
                    <a
                      href="https://www.instagram.com/rai.drmwn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/raihanputrad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/Hanntuu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-2xl hover:transition-transform transform scale-100 hover:scale-105 cursor-pointer">
              <figure>
                <img
                  src="./Rifki.jpg"
                  alt="Person"
                  className="rounded-3xl w-52"
                />
              </figure>
              <div className="card-body font-jakarta text-secondary">
                <h2 className="card-title text-xl font-extrabold">
                  Rifki Rosada
                </h2>
                <p>S1 Teknik Telekomunikasi</p>
                <div className="text-center">
                  <div className="inline-block">
                    <a
                      href="https://www.instagram.com/kuuhaku_riro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://id.linkedin.com/in/rifki-rosada-a8569125a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com/froxyroar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex flex-col items-center">
          <div className="w-64 carousel rounded-box shadow-2xl md:w-6/12">
            <div className="carousel-item w-full">
              <div className="card bg-base-100 ">
                <figure>
                  <img
                    src="./Fatih.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Muhardian Fathih
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block">
                      <a
                        href="https://www.instagram.com/muhardianf/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/muhardian-fathih-b60a68288/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/muhardiann"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="card bg-base-100">
                <figure>
                  <img
                    src="./Raihan.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Raihan Putra D
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block">
                      <a
                        href="https://www.instagram.com/rai.drmwn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/raihanputrad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/Hanntuu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="card bg-base-100">
                <figure>
                  <img
                    src="./Rifki.jpg"
                    alt="Person"
                    className="rounded-3xl w-52 md:w-11/12"
                  />
                </figure>
                <div className="card-body font-jakarta text-secondary">
                  <h2 className="card-title text-lg font-extrabold md:text-3xl">
                    Rifki Rosada
                  </h2>
                  <p className="md:text-2xl">S1 Teknik Telekomunikasi</p>
                  <div className="text-center">
                    <div className="inline-block">
                      <a
                        href="https://www.instagram.com/kuuhaku_riro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ig inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://id.linkedin.com/in/rifki-rosada-a8569125a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-linkedin inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href="https://github.com/froxyroar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-github inline-block mx-2 transition-transform transform hover:scale-110"
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOurTeam;
