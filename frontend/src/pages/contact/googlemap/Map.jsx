import React from "react";

const Map = () => {
  return (
    <div className="relative w-full h-0 md:pb-[40%] md:mt-20 mt-8 mb-0 pb-[60%]">
      {/* Added mb-0 */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.390324927179!2d77.23958257554276!3d28.64802928337674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdfdd68dfb1%3A0x7de805877e800b6c!2zMjE0LCDgpIXgpILgpLjgpL7gpLDgpYAg4KSu4KS-4KSw4KWN4KSXLCDgpKrgpLDgpKbgpL4g4KSs4KS-4KSXLCDgpKbgpLDgpL_gpK_gpL7gpJfgpILgpJwsIOCkpuCkv-CksuCljeCksuClgCwgMTEwMDAy!5e0!3m2!1shi!2sin!4v1720168096882!5m2!1shi!2sin"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
