import React from "react";
import { Book , Rocket } from "lucide-react";

import CerebriumLogo from "@/assets/logos/cerebrium.png";
import RimeLogo from "@/assets/logos/rime.png";
import { Button } from "./components/ui/button";

type SplashProps = {
  handleReady: () => void;
};

const Splash: React.FC<SplashProps> = ({ handleReady }) => {
  return (
    <main className="w-full h-full flex items-center justify-center bg-primary-200 p-4 bg-[length:auto_50%] lg:bg-auto bg-colorWash bg-no-repeat bg-right-top">
      <div className="flex flex-col gap-8 lg:gap-12 items-center max-w-full lg:max-w-3xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance">
          OpenAI Realtime API comparison
        </h1>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-primary-400">Brought to you by:</span>
          <div className="flex flex-row gap-6 bg-white rounded-full py-4 px-8 items-center">
            <a href="https://rime.ai/" target="_blank">
              <img src={RimeLogo} alt="rime.ai" className="max-h-[22px]" />
            </a>
            <a href="https://www.cerebrium.ai/" target="_blank">
              <img
                src={CerebriumLogo}
                alt="Cerebrium.ai"
                className="max-h-[22px]"
              />
            </a>
          </div>
        </div>

        <div className="max-w-full lg:max-w-2xl flex flex-col gap-6">
          <p className="lg:text-lg text-primary-600">
            This is a demo of a cheaper and faster implementation of an alternative solution to OpenAI's realtime API. Realize <b>50%</b>
            cost savings and <b>35%</b> faster latencies without a drop in performance.
          </p>
          <p className="lg:text-lg text-primary-600">
            This example was built using the Cerebrium Serverless AI infrastructure platform and Rime's Text-to-Speech API.
          </p>
        </div>


        {/* TODO: Uncomment this line to implement yourself */}
        <Button onClick={handleReady}>Start Bot</Button>

        <div className="h-[1px] bg-primary-300 w-full" />

        <footer className="flex flex-col lg:flex-row lg:gap-2">
          <Button variant="light" asChild>
            <a
              href="https://github.com/CerebriumAI/examples/tree/master/31-openai-realtime-api-comparison"
              className="text-indigo-600"
            >
              <Book className="size-6" />
              View source code
            </a>
          </Button>
          <Button variant="light" asChild>
            <a
              href="www.cerebrium.ai/blog/an-alternative-to-openai-realtime-api-for-voice-capabilities"
              className="text-indigo-600"
            >
              <Rocket className="size-6" />
              Deploy your own
            </a>
          </Button>
        </footer>
      </div>
    </main>
  );
};

export default Splash;
