import { useState, useEffect, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ExampleCardProps {
  title: string;
  code: string;
  image: string;
  children?: ReactNode | ReactNode[];
}

export default function ExampleCard({
  title,
  code,
  image,
  children,
}: ExampleCardProps) {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const img = await import(image);
      setImageSrc(img.default);
    };

    loadImage();
  }, [image]);

  function handleClick() {
    navigate(`/results/${code}`);
  }

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
        <button
          type="submit"
          className="btn btn-primary"
          name="action"
          value="calculate charges"
          onClick={handleClick}
        >
          View example
        </button>
      </div>
    </div>
  );
}
