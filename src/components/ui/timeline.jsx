import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      <div className="px-2">
        <div ref={ref} className="relative pb-8">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative flex items-start pt-8 mb-12"
              >
                {/* Left Side Content */}
                <div className="w-44 pr-6">
                  {isLeft && (
                    <div className="text-right">
                      <h3 className="text-lg font-bold text-sky-300 mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <div className="text-base text-slate-400 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Dot - Always in center */}
                <div className="flex-shrink-0 z-10 mx-3">
                  <div className="h-12 w-12 rounded-full bg-sky-500/20 border-2 border-sky-400 flex items-center justify-center shadow-lg bg-black">
                    <div className="h-5 w-5 rounded-full bg-sky-400" />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="w-44 pl-6">
                  {!isLeft && (
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-sky-300 mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <div className="text-base text-slate-400 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400/30 via-sky-300/50 to-sky-400/30"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-sky-400 via-sky-300 to-sky-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
