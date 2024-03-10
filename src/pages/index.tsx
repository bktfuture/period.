import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { TimelineMax, Power1, Power0 } from "gsap";

export default function Home() {
  useEffect(() => {
    let distance = 169.878;
    const colors = [
      "#ffccd5",
      "#ffb3c1",
      "#ff758f",
      "#e00914",
      "#f67728",
      "#ff4d6d",
      "#ffb3c1",
      "#c9184a",
    ];

    function createFaces() {
      for (let x = 1; x < 10; x++) {
        const pathE = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        pathE.setAttribute("id", "pattern_" + x);
        pathE.setAttribute(
          "d",
          "M" +
            distance +
            "26.318006 c 29.3,24.77 29.07,40.97 19.24,85.749994 -0.53,10.83 14.07,-3.14 18.13,7.25 10.24,9.01 4.88,9.33 5,16.38 5.9,9.29 -5.01,16.41 -1.87,20.75 -0.93,13.28 -8.42,20.29 -19.5,33 -8.41,14.51 -38.2,-1.28 -38.38,-1.25 -2.68,1.13 9.3,18.36 21.62,28.88 20.4,13.44 39.98,56.17 48.13,79.37 0,0 -221.25000843,-0.37 -221.25000843,-0.87 17.12000043,-31.59 35.20000043,-79.82 75.00000043,-69.63 2.4,-24.69 0.51,-35.26 -26.62,-60 -5.88,-3.37 -18,-5.75 -29.13,-5.75 -31.090001,-3.55 -8.73,-21.27 -15.2500004,-29.25 -2,-5.25 -0.88,-8.25 3,-8.25 3.7500004,0 3.8800004,-1.5 0.25,-3.13 -8.98000023,-4.56 0.76,-11.59 2.0000004,-14.87 0,-0.62 -2.7500004,-2.38 -5.5000004,-5.499996 -16.9500006,-22.589998 21.9600004,-9.39 25.8700004,-39.999998 0.63,-6.13 2,-9 9.88,-20.88 38.52,-64.8 117.690008,-22.07 129.380008,-12" +
            "z" +
            distance
        );
        pathE.style.fill = "none";
        pathE.style.stroke = colors[x - 1];
        pathE.style.strokeWidth = "1.2";
        pathE.style.opacity = 1;
        document.querySelector("svg").appendChild(pathE);
        distance += 20;
      }
    }

    createFaces();

    function fillPattern() {
      const tl = new TimelineMax();
      for (let i = 9; i > 0; i--) {
        tl.fromTo(
          "#pattern_" + i,
          0.3,
          { css: { fill: "none" } },
          { css: { fill: colors[i - 1] }, yoyo: true, ease: Power1.easeInOut }
        ).fromTo(
          "#pattern_" + i,
          0.3,
          { css: { autoAlpha: "0.3" } },
          {
            css: { autoAlpha: "0.5" },
            yoyo: true,
            ease: Power0.easeInOut,
          },
          "-=0.02"
        );
      }
      tl.fromTo(
        "#moon",
        1,
        { attr: { fill: "red" } },
        { attr: { fill: "#251586" }, yoyo: true, ease: Power1.easeInOut },
        "-=1"
      ).fromTo(
        "#moon",
        1,
        { css: { autoAlpha: 0.6 } },
        { css: { autoAlpha: 0.9 }, yoyo: true, ease: Power1.easeInOut },
        "-=1.5"
      );

      return tl;
    }

    function outlinesPatternRight() {
      const tl = new TimelineMax();
      for (let i = 1; i < 10; i++) {
        tl.from("#pattern_" + i, 0.2, {
          css: { autoAlpha: 0 },
          yoyo: true,
          ease: Power0.easeInOut,
        });
      }
      tl.fromTo(
        "#moon",
        1,
        { css: { autoAlpha: 1 } },
        { css: { autoAlpha: 0.4 }, yoyo: true, ease: Power1.easeInOut },
        "-=1.5"
      )
        .fromTo(
          "#moon",
          1,
          { attr: { fill: "#251586" } },
          { attr: { fill: "red" }, yoyo: true, ease: Power1.easeInOut },
          "-=1"
        )
        .fromTo(
          "#moon",
          1,
          { css: { scale: 0.6 } },
          { scale: 1, yoyo: true, ease: Power1.easeInOut },
          "-=1.5"
        )
        .fromTo(
          "#pattern_7",
          1,
          { attr: { fill: "none" } },
          { attr: { fill: "red" }, yoyo: true, ease: Power1.easeInOut },
          "-=1.5"
        );

      return tl;
    }

    function squeeze() {
      const tl = new TimelineMax();

      for (let i = 8; i > 0; i--) {
        tl.fromTo(
          "#pattern_" + i,
          0.5,
          { css: { autoAlpha: 1 } },
          { css: { autoAlpha: 0 }, ease: Power1.easeInOut },
          "-=0.2"
        );
      }
      tl.fromTo(
        "#pattern_9",
        1,
        { x: 0 },
        { x: -150, ease: Power1.easeInOut },
        "-=0.2"
      ).fromTo(
        "#pattern_9",
        1,
        { css: { autoAlpha: "0.5" } },
        { css: { autoAlpha: "1" }, ease: Power1.easeInOut },
        "-=1"
      );

      return tl;
    }

    const masterT = new TimelineMax({ repeat: 5 }); // Loop 5 times 

    masterT.add(outlinesPatternRight()).add(fillPattern()).add(squeeze());

    return () => {
      masterT.kill(); // Kill the animation on component unmount
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <Head>
        <title>period.</title>
      </Head>
      <header className="p-4 ml-2 text-2xl font-gabriela text-period-red">
        period.
      </header>
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="svg-container">
          <svg className="flex-1" width="740" height="600" viewBox="-140 0 640 300"></svg>
        </div>
        <div className="flex items-center">
          <textarea
            className="w-64 p-2 rounded-full border border-medium-rose focus:outline-none focus:border-dark-rose text-center resize-none text-black"
            placeholder="Explore the wonders of the female body..."
          />
        </div>
        <Link href="/ailearning" passHref>
          <div className="text-dark-rose p-4">
            <button className="rounded-full border border-medium-rose text-white p-2 bg-period-red hover:bg-dark-rose hover:border-dark-rose transition duration-300 ease-in-out">
              Enlighten Me
            </button>
          </div>
        </Link>
      </main>
    </>
  );
}
