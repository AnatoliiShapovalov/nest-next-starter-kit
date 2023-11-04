import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'primereact/image';

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Image
        className="hover:shadow-lg p-6 rounded-full"
        src="/react.svg"
        width="150"
      />
      <span className="text-lg pt-4">Congratulations, it works!</span>
      <span className="text-sm text-slate-400">
        (at least the frontend does)
      </span>
    </div>
  );
};

export default Home;
