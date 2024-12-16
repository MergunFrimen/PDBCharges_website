import { useState, useEffect, ReactNode } from "react";

interface ExampleCardProps {
  title: string;
  image: string;
  children?: ReactNode | ReactNode[];
}

export default function ExampleCard({
  title,
  image,
  children,
}: ExampleCardProps) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const img = await import(image);
      setImageSrc(img.default);
    };

    loadImage();
  }, [image]);

  return (
    <div className="col-lg-4 pl-0">
      <div className="col">
        <strong>{title}</strong>
      </div>
      <div className="col text-align mt-3">
        <img src={imageSrc} alt="P-glycoprotein" style={{ height: "200px" }} />
      </div>
      <div className="col mt-3 text-justify">{children}</div>
      <div className="col text-center mt-3">
        <form>
          <input type="hidden" name="code" value="6wlv1uzv" />
          <button
            type="submit"
            className="btn btn-primary"
            name="action"
            value="calculate charges"
          >
            View example
          </button>
        </form>
      </div>
    </div>
  );
}
