import { useEffect } from "react";
import "molstar/lib/mol-plugin-ui/skin/light.scss";
import { ViewerLayout } from "./ViewerLayout";
import { useMolstar } from "../contexts/MolstarContext";
import { useBehavior } from "../hooks/useBehavior";
import LoaderCircle from "./Loader";

interface MolstarViewerProps {
  pdbId: string;
}

export default function MolstarViewer({ pdbId }: MolstarViewerProps) {
  const { viewer } = useMolstar();

  const [isLoading] = useBehavior(viewer.state.isLoading);
  const [isInitialized] = useBehavior(viewer.state.isInitialized);

  // init subs
  useEffect(() => {
    viewer.sub();
    return () => viewer.unsub();
  }, [viewer]);

  // handle load
  useEffect(() => {
    viewer.loadInit(pdbId);
  }, [pdbId, viewer]);

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}
      {isInitialized && <ViewerLayout viewer={viewer} />}
    </div>
  );
}
