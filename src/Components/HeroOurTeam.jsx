import React from "react";

  const HeroOurTeam = () => {
    return (
      <div className="flex flex-col justify-center space-y-8 py-10">
        <div className="flex flex-col space-y-12 items-center">
          <h2 className="text-3xl font-jakarta font-extrabold sm:text-4xl">EMBEDDED</h2>
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
                <div className="card-body font-jakarta text-secondary ">
                  <h2 className="card-title font-jakarta text-xl font-extrabold">
                    Hazman Wirayudha
                  </h2>
                  <p className=" font-jakarta">S1 Teknik Telekomunikasi</p>
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
                    <div className="card-actions justify-end"></div>
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
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-12 items-center">
          <h2 className="text-3xl font-jakarta font-extrabold sm:text-4xl">PROTOCOL</h2>
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

  export default HeroOurTeam;